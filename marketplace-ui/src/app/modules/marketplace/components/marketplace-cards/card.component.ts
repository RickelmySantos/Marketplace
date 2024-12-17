import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { Aplicacao } from 'src/app/models/aplicacao.model';
import { CardFooterComponent } from 'src/app/modules/marketplace/components/marketplace-cards/card-footer.component';
import { CardSistemaComponent } from 'src/app/modules/marketplace/components/marketplace-cards/card-sistema.component';

import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'app-card',
    template: `
        <section class=" flex flex-column mt-3">
            <h2 class="text-4xl font-bold mb-5">{{ title }}</h2>
            <ng-container *ngIf="data?.length; else noItems">
                <div class="flex gap-4 flex-wrap">
                    <ng-container *ngFor="let app of data; let i = index">
                        <app-card-sistema [aplicacao]="app" (onToggleFavoritos)="onToggleFavoritos.emit(app)">
                            <card-footer></card-footer>
                        </app-card-sistema>
                    </ng-container>
                </div>
            </ng-container>

            <!-- Caso não tenha sistema -->
            <ng-template #noItems>
                <p>{{ emptyMessage }}</p>
            </ng-template>
        </section>
    `,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    styles: [],
    imports: [SharedModule, NgIf, NgFor, CardSistemaComponent, CardFooterComponent],
})
export class CardComponent {
    @Input()
    title: string;

    @Input()
    data: Aplicacao[];

    @Input()
    emptyMessage: 'Nenhuma aplicação encontrada!';

    @Output()
    onToggleFavoritos = new EventEmitter<any>();
}
