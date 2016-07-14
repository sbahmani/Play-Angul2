/**
 * Created by sjb on 6/16/16.
 */
import {Component} from "@angular/core";
import {HeroService} from "./hero.service";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {AuthService} from "./auth.service";


@Component({
    selector: 'my-app',
    moduleId: module.id,
    template: `
     <h1>{{title}}</h1>
  <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
       <a (click)="logout()" *ngIf="authService.isLoggedIn">Logout</a>
  </nav>
  <router-outlet></router-outlet>
`,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ],
    styleUrls: ['app.component.css']
})
export class AppComponent {
    constructor(public authService:AuthService, heros:HeroService) {

    }

    logout() {
        this.authService.logout().then();
    }

    title = 'Tour of Heroes';
}
