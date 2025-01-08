import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { APP_INITIALIZER, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication, BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { OAuthStorage, provideOAuthClient } from 'angular-oauth2-oidc';
import { KeycloakService } from 'keycloak-angular';
import { ROUTES } from 'src/app/app.routes';
import { authInterceptor } from 'src/app/core/auth/auth.interceptor';
import { AuthService } from 'src/app/core/auth/auth.service';
import { httpLoaderFactory } from 'src/app/core/translate/translate-loader-factory';
import { APP_ICONS, AppIcons } from 'src/app/icons';
import { APP_STYLES, AppStyles } from 'src/style';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(ROUTES),
        provideClientHydration(),
        provideOAuthClient(),
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
            provide: AuthService,
            useFactory: () => {
                const service = new AuthService();
                return service;
            },
        },
        {
            provide: APP_INITIALIZER,
            useFactory: (keycloak: KeycloakService, library: FaIconLibrary) => () => {
                library.addIconPacks(fas);
                library.addIconPacks(far);

                return keycloak
                    .init({
                        config: {
                            clientId: 'angular-ui',
                            realm: 'marketplace',
                            url: 'http://localhost:8280',
                        },
                        initOptions: {
                            onLoad: 'login-required',
                            checkLoginIframe: false,
                        },
                        enableBearerInterceptor: true,
                        bearerPrefix: 'Bearer',
                        bearerExcludedUrls: ['/assets', '/public'],
                    })
                    .then(async () => {
                        const token = await keycloak.getToken();
                        if (token) {
                            localStorage.setItem('access_token', token);
                        }
                    });
            },
            deps: [KeycloakService, FaIconLibrary],
            multi: true,
        },
        KeycloakService,
        { provide: APP_ICONS, useFactory: () => AppIcons },
        { provide: APP_STYLES, useFactory: () => AppStyles },
    ],
}).catch(err => console.error(err));
