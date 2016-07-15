// Imports for loading & configuring the in-memory web api

// The usual bootstrapping imports
import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {HTTP_PROVIDERS} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {AuthService} from "./auth.service";
import {AdminGuard} from "./guard/admin.guard";
import {UserGuard} from "./guard/user.guard";
import {AuthOnlyGuard} from "./guard/auth.only.guard";

bootstrap(AppComponent,
    [
        APP_ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        AuthService
    ]
);
