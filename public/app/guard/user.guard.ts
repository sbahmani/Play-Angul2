/**
 * Created by sjb on 7/15/16.
 */
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {AuthGuard} from "./auth.guard";

@Injectable()
export class UserGuard extends AuthGuard {
    constructor(private authServicei:AuthService, private routeri:Router) {
        super(authServicei, routeri, ["user"])
    }
}