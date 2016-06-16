/**
 * Created by sjb on 6/16/16.
 */
import {Component}       from '@angular/core';
import {HeroService}     from './hero.service';
import {HeroesComponent}   from './heroes.component'
import {DashboardComponent}   from './dashboard.component'
import {HeroDetailComponent}   from './hero-detail.component'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {
    LocationStrategy,
    HashLocationStrategy
} from '@angular/common';


@Component({
    selector: 'my-app',
    moduleId: module.id,
    template: `
     <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        HeroService
    ],
    styleUrls: ['app.component.css']
})
@RouteConfig([
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }, {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    }
])
export class AppComponent {
    title = 'Tour of Heroes';
}
