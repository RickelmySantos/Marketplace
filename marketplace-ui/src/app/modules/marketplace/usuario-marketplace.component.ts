import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from 'src/app/modules/marketplace/components/topbar/topbar.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'usuario-marketplace-app',
  template: `
    <topbar-app></topbar-app>
   <main class="mt-6rem h-screen">
    <section class="main-content flex flex-1 flex-column align-items-center justify-content-center">
        <router-outlet></router-outlet>
    </section>
  </main>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: [':host { display: block; padding: 7rem 20rem; }'],
  imports: [SharedModule, RouterOutlet, TopbarComponent],
})
export class UsuarioMarketplaceComponent {

}
