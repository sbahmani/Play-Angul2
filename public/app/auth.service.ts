/**
 * Created by sjb on 04/07/16.
 */
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class AuthService {

    isLoggedIn:boolean = false;
    roles:string[] = [];

    login(username:string, password:string) {
        //return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post("/login",
            JSON.stringify({
                username: username,
                password: password
            }), {headers: headers})
            .toPromise()
            .then(res => {
                this.isLoggedIn = true;
                this.roles = res.json();
                return res
            })
            .catch(e => {
                console.info("111")
                this.isLoggedIn = false;
                this.roles = [];
                return e;
            });
    }

    logout() {
        return this.http.get("/logout")
            .toPromise()
            .then(res => {
                this.isLoggedIn = false;
                this.roles = [];
                return res;
            })
            .catch(e => {
                console.info("service " + e)
                return e
            });
    }

    constructor(private http:Http) {
        console.log("start authorize");
        this.http.get("/authorize")
            .toPromise()
            .then(res=> {
                this.isLoggedIn = true;
                this.roles = res.json();
            })
            .catch(err => {
                console.log(err);
            });
    }

}
