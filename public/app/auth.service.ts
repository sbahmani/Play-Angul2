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
                console.log(res);
                return res
            })
            .catch(e => {
                console.info("service " + e)
                return e
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
    }

}
