import {Component, OnInit} from "@angular/core";
import {Router}            from '@angular/router';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {HeroDetailComponent} from "./hero-detail.component";
import {AuthService} from "./auth.service";

@Component({
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css'],
    moduleId: module.id,
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    heroes:Hero[];
    selectedHero:Hero;
    addingHero = false;
    error:any;

    checkRoles():boolean {
        return this.authservice.roleContain('admin')
    }

    constructor(private router:Router,
                private heroService:HeroService, private authservice:AuthService) {
    }

    getHeroes() {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes)
            .catch(error => this.error = error); // TODO: Display error message
    }

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero:Hero) {
        console.log("call close event");
        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    }

    delete(hero:Hero, event:any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
        this.addingHero = false;
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
