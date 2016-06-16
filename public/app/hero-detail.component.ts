/**
 * Created by sjb on 12/06/16.
 */
import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {HeroService} from './hero.service';


import {Hero} from "./hero";
@Component({
    selector: 'my-hero-detail',
    moduleId: module.id,
    template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <button (click)="goBack()">Back</button>
    </div>
  `,
    styleUrls: ['hero-detail.component.css']

})
export class HeroDetailComponent implements OnInit {
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    constructor(private heroService:HeroService,
                private routeParams:RouteParams) {
    }

    goBack() {
        window.history.back();
    }


    hero:Hero;
}

