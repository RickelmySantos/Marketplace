import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { map, Observable } from 'rxjs';
import { BaseComponent } from 'src/app/core/util/base.component';
import { Aplicacao } from 'src/app/models/aplicacao.model';
import { CardComponent } from 'src/app/modules/marketplace/components/marketplace-cards/card.component';
import { SearchService } from 'src/app/services/search.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'home-usuario-app',
    templateUrl: './home.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [SharedModule, RouterLink, AsyncPipe, NgIf, CarouselModule, CardComponent],
})
export class HomeComponent extends BaseComponent {
    aplicacoes$: Observable<Aplicacao[]>;

    constructor(private readonly searchService: SearchService) {
        super();
    }

    override ngOnInit(): void {
        this.aplicacoes$ = this.searchService.listAll().pipe(map(res => res.content.flat()));

        this.aplicacoes$.subscribe();
    }
}
