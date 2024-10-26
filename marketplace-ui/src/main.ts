import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { APP_INITIALIZER, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication, BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { OAuthStorage } from 'angular-oauth2-oidc';
import { KeycloakService } from 'keycloak-angular';
import { ROUTES } from 'src/app/app.routes';
import { authInterceptor } from 'src/app/core/auth/auth.interceptor';
import { httpLoaderFactory } from 'src/app/core/translate/translate-loader-factory';
import { initialize } from 'src/keycloack-init';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(ROUTES),
        provideClientHydration(),
        provideHttpClient(withInterceptors([authInterceptor])),
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        importProvidersFrom(
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: httpLoaderFactory,
                    deps: [HttpClient],
                },
            })
        ),
        {
            provide: OAuthStorage,
            useValue: localStorage,
        },
        {
            provide: APP_INITIALIZER,
            useFactory: initialize,
            multi: true,
            deps: [KeycloakService],
        },
        KeycloakService,
    ],
}).catch(err => console.error(err));
