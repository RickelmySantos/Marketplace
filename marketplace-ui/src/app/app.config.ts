import { CommonModule } from "@angular/common";
import { HttpClient, provideHttpClient, withFetch, withInterceptorsFromDi } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from "@angular/core";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { ROUTES } from "src/app/app.routes";
import { httpLoaderFactory } from "./core/translate/translate-loader-factory";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(ROUTES), provideClientHydration(),
    BrowserAnimationsModule, BrowserModule, CommonModule,importProvidersFrom(HttpClient),provideHttpClient(withInterceptorsFromDi(),withFetch() ) ,importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }))]
};


