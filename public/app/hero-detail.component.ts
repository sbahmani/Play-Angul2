import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
@Component({
    selector: 'my-hero-detail',
    moduleId: module.id,
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero:Hero;
    @Output() close = new EventEmitter<Hero>();
    error:any;
    sub:any;
    navigated = false; // true if navigated here
    constructor(private heroService:HeroService,
                private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.navigated = true;
                this.heroService.getHero(id)
                    .then(hero => this.hero = hero);
            } else {
                this.navigated = false;
                this.hero = new Hero();
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    save() {
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero; // saved hero, w/ id if new
                this.goBack(hero);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack(savedHero:Hero = null) {
        this.close.emit(savedHero);
        console.log("close evt" + JSON.stringify(savedHero));
        if (this.navigated) {
            window.history.back();
        }
    }
}
