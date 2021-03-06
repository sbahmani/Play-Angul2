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
 * Created by sjb on 04/07/16.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = '';
        this.authService.login(this.username, this.password).then(function (res) {
            if (res.status == 200)
                _this.router.navigate(['/dashboard']);
            else
                _this.message = "wrong username or password";
        }).catch(function (error) {
            console.info("login " + error);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn) {
            this.router.navigate(['/']);
        }
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function (res) {
            _this.message = "logged out";
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>LOGIN</h2>\n    <p>{{message}}</p>\n    <div>\n        <label>username: </label>\n        <input type=\"text\" [(ngModel)]=\"username\" placeholder=\"username\" required/>\n    </div>\n    <div>\n        <label>password: </label>\n        <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\" required/>\n    </div>\n    <p>\n      <button (click)=\"login()\"  *ngIf=\"!authService.isLoggedIn\">Login</button>\n      <button (click)=\"logout()\" *ngIf=\"authService.isLoggedIn\">Logout</button>\n    </p>",
            styles: ["\n    input {\n    height: 2em;\n    margin-top: 1em;\n    font-size: 1em;\n    padding-left: .4em;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map