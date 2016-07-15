/**
 * Created by sjb on 02/07/16.
 */
import {provideRouter, RouterConfig} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {LoginComponent} from "./login.component";
import {UserGuard} from "./guard/user.guard";
import {AdminGuard} from "./guard/admin.guard";
import {AuthOnlyGuard} from "./guard/auth.only.guard";

export const routes:RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent,
        canActivate: [AdminGuard]

    },
    {
        path: 'heroes',
        component: HeroesComponent,
        canActivate: [UserGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AdminGuard,
    UserGuard,
    AuthOnlyGuard,
];
