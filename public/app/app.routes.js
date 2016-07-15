"use strict";
/**
 * Created by sjb on 02/07/16.
 */
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var heroes_component_1 = require("./heroes.component");
var hero_detail_component_1 = require("./hero-detail.component");
var login_component_1 = require("./login.component");
var user_guard_1 = require("./guard/user.guard");
var admin_guard_1 = require("./guard/admin.guard");
var auth_only_guard_1 = require("./guard/auth.only.guard");
exports.routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent,
        canActivate: [admin_guard_1.AdminGuard]
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent,
        canActivate: [user_guard_1.UserGuard]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    admin_guard_1.AdminGuard,
    user_guard_1.UserGuard,
    auth_only_guard_1.AuthOnlyGuard,
];
//# sourceMappingURL=app.routes.js.map