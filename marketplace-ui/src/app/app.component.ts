import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { KeycloakService } from 'keycloak-angular';
import defaultLanguage from '../assets/i18n/pt.json';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        <router-outlet></router-outlet>
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [RouterOutlet],
})
export class AppComponent {
    constructor(private readonly translateService: TranslateService, private readonly keycloakService: KeycloakService) {
        translateService.addLangs(['pt']);
        translateService.setTranslation('pt', defaultLanguage);
        translateService.setDefaultLang('pt');
    }

    logout() {
        this.keycloakService.logout();
    }
}
