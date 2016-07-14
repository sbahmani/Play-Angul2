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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var AuthService = (function () {
    function AuthService(http) {
        var _this = this;
        this.http = http;
        this.isLoggedIn = false;
        this.roles = [];
        console.log("start authorize");
        this.http.get("/authorize")
            .toPromise()
            .then(function (res) {
            _this.isLoggedIn = true;
            _this.roles = res.json();
        })
            .catch(function (err) {
            console.log(err);
        });
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        //return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post("/login", JSON.stringify({
            username: username,
            password: password
        }), { headers: headers })
            .toPromise()
            .then(function (res) {
            _this.isLoggedIn = true;
            _this.roles = res.json();
            return res;
        })
            .catch(function (e) {
            console.info("111");
            _this.isLoggedIn = false;
            _this.roles = [];
            return e;
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get("/logout")
            .toPromise()
            .then(function (res) {
            _this.isLoggedIn = false;
            _this.roles = [];
            return res;
        })
            .catch(function (e) {
            console.info("service " + e);
            return e;
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map