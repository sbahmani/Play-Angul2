// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';


// The usual bootstrapping imports
import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent,
    [
        HTTP_PROVIDERS
    ]
);
