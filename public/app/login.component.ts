/**
 * Created by sjb on 04/07/16.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
    template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <div>
        <label>username: </label>
        <input type="text" [(ngModel)]="username" placeholder="username" required/>
    </div>
    <div>
        <label>password: </label>
        <input type="password" [(ngModel)]="password" placeholder="password" required/>
    </div>
    <p>
      <button (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
      <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
    </p>`,
    styles: [`
    input {
    height: 2em;
    margin-top: 1em;
    font-size: 1em;
    padding-left: .4em;
    }
    `]
})
export class LoginComponent implements OnInit {

    message:string;
    username:string;
    password:string

    constructor(public authService:AuthService, public router:Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
        this.message = 'Trying to log in ...';
        this.authService.login(this.username, this.password).then
        (
            res => {
                console.log(res);
                this.setMessage();
                this.authService.isLoggedIn = true;
                this.authService.roles = res.json();
                this.router.navigate(['/dashboard']);
            }
        ).catch(error => {
            this.authService.isLoggedIn = false;
            this.authService.roles = [];
            console.info("login " + error)
        });
    }

    ngOnInit() {
        if (this.authService.isLoggedIn) {
            this.router.navigate(['/']);
        }
    }

    logout() {
        this.authService.logout().then(
            res => {
                this.setMessage();
            }
        );
    }
}
