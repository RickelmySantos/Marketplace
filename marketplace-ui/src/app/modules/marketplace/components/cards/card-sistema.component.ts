import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { Aplicacao } from 'src/app/models/aplicacao.model';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-card-sistema',
  template: `
    <article class="card-content">
      <img alt="Card" src="https://primefaces.org/cdn/primeng/images/usercard.png" />
      <section class="info">
        <h3>{{ aplicacao?.nome }}</h3>
        <p class="text-lg">{{ aplicacao?.descricao }}</p>
        <footer class="buttons">
          <a pRipple [pTooltip]="'botao.visualizar' | translate" tooltipPosition="bottom" size="2xl" class="text-white" [routerLink]="['/marketplace/detail/', aplicacao.id]">
            <fa-icon size="2xl" class="text-white"></fa-icon>
          </a>
          <a pRipple [pTooltip]="'botao.visualizar' | translate" tooltipPosition="bottom" size="2xl" class="text-white">
            <fa-icon size="2xl" class="text-white"></fa-icon>
          </a>
          <p-button [icon]="'pi pi-trash'" styleClass="p-button-secondary"></p-button>
        </footer>
      </section>
    </article>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [SharedModule, TooltipModule, RouterLink, NgIf, NgFor, AsyncPipe],
})
export class CardSistemaComponent {
  aplicacao: Aplicacao;
}
