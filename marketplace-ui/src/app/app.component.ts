import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
}
