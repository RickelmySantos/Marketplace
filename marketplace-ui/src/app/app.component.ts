import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import defaultLanguage from '../assets/i18n/pt.json';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<router-outlet></router-outlet>
`,
schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'marketplace-ui';

  constructor(private readonly translateService: TranslateService) {
  translateService.addLangs(['pt']);
     translateService.setTranslation('pt', defaultLanguage);
     translateService.setDefaultLang('pt');
  }

}
