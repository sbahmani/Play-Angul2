"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by sjb on 6/16/16.
 */
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var AppComponent = (function () {
    function AppComponent(authService, heros) {
        this.authService = authService;
        this.title = 'Tour of Heroes';
    }
    AppComponent.prototype.logout = function () {
        this.authService.logout().then();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            template: "\n     <h1>{{title}}</h1>\n  <nav>\n      <a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Dashboard</a>\n      <a [routerLink]=\"['/heroes']\" routerLinkActive=\"active\">Heroes</a>\n       <a (click)=\"logout()\" *ngIf=\"authService.isLoggedIn\">Logout</a>\n  </nav>\n  <router-outlet></router-outlet>\n",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                hero_service_1.HeroService
            ],
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map