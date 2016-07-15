import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../auth.service";

@Injectable()
export abstract class AuthGuard implements CanActivate {

    constructor(private authService:AuthService, private router:Router, private neededRoles:string[]) {
    }

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
        console.info("Auth Guard " + state + " " + next + " " + this.authService.isLoggedIn);
        if (this.authService.isLoggedIn) {
            if (this.neededRoles.length > 0) {
                return this.neededRoles.filter(role => this.authService.roles.indexOf(role) > -1).length > 0;
            } else {
                return true;
            }
        }
        this.router.navigate(['/login']);
        return false;
    }
}
