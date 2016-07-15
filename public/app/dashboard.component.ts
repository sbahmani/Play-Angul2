/**
 * Created by sjb on 6/16/16.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {AuthService} from "./auth.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    moduleId: module.id
})
export class DashboardComponent implements OnInit {
    heroes:Hero[] = [];

    constructor(private router:Router, private heroService:HeroService, private authservice:AuthService) {
    }


    ngOnInit() {
        console.log("call init dashboard");
        if (this.authservice.isLoggedIn)
            this.heroService.getHeroes()
                .then(heroes => this.heroes = heroes.slice(1, 5));

    }

    gotoDetail(hero:Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}