import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataStore } from 'src/app/core/store/data.store';
import { BaseComponent } from 'src/app/core/util/base.component';
import { Aplicacao } from 'src/app/models/aplicacao.model';
import { CardComponent } from 'src/app/modules/marketplace/components/marketplace-cards/card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'app-home',
    template: `
        <section class="h-14rem flex flex-column justify-content-center align-items-start surface-section surface-border border-bottom-1 px-4 pt-4 pb-0">
            <div *ngIf="aplicacaoStore.value$ | async as aplicacao">
                <app-card [data]="aplicacao"></app-card>
            </div>
        </section>
    `,

    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SharedModule, CardComponent, NgIf, AsyncPipe],
})
export class HomeComponent extends BaseComponent {
    aplicacaoStore = new DataStore<Aplicacao[]>();

    override ngOnInit(): void {
        this.aplicacaoStore.value$.subscribe(data => {
            console.log('Dados emitidos pelo DataStore:', data);
        });
    }
}
