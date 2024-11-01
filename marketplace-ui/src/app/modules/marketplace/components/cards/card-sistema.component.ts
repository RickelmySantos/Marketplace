import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { Aplicacao } from 'src/app/models/aplicacao.model';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'app-card-sistema',
    template: `
        <article class="card-content">
            <header>
                <figure>
                    <img alt="Card" src="https://primefaces.org/cdn/primeng/images/usercard.png" />
                </figure>
            </header>
            <section class="info">
                <h3>{{ aplicacao?.nome }}</h3>
                <p class="text-lg">{{ aplicacao?.descricao }}</p>
            </section>
            <footer class="buttons">
                <ng-content select="[footer]"></ng-content>
            </footer>
        </article>
    `,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [SharedModule, TooltipModule, RouterLink, NgIf, NgFor, AsyncPipe],
})
export class CardSistemaComponent {
    @Input()
    aplicacao: Aplicacao;
}
