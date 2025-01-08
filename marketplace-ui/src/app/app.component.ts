import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { KeycloakService } from 'keycloak-angular';
import { MenuService } from 'src/app/core/layout/service/menu.service';
import { MENU } from 'src/app/menu';
import defaultLanguage from '../assets/i18n/pt.json';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet>
    `,
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [RouterOutlet],
})
export class AppComponent {
    constructor(private readonly translateService: TranslateService, private readonly keycloakService: KeycloakService, private readonly menuService: MenuService) {
        translateService.addLangs(['pt']);
        translateService.setTranslation('pt', defaultLanguage);
        translateService.setDefaultLang('pt');
        this.menuService.load(MENU);

        const browserLang = translateService.getBrowserLang();
        const lang = browserLang.match(/pt/) ? browserLang : 'pt';
        this.changeLang(lang);
    }

    logout() {
        this.keycloakService.logout();
    }

    changeLang(lang: string): void {
        this.translateService.use(lang);
    }
}
