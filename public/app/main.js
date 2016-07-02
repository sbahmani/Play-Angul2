// Imports for loading & configuring the in-memory web api
"use strict";
// The usual bootstrapping imports
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
]);
//# sourceMappingURL=main.js.map