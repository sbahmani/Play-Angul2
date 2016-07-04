/**
 * Created by sjb on 02/07/16.
 */
import {provideRouter, RouterConfig} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from "./login.component";

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
        canActivate: [AuthGuard]
    },
    {
        path: 'heroes',
        component: HeroesComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
