import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { map, Observable } from 'rxjs';
import { Aplicacao } from 'src/app/models/aplicacao.model';
import { CardComponent } from 'src/app/modules/marketplace/components/cards/card.component';
import { SearchService } from 'src/app/services/search.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'home-usuario-app',
    templateUrl: './usuario-home.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    styleUrls: ['./usuario-home.component.scss'],
    imports: [SharedModule, RouterLink, AsyncPipe, NgFor, NgIf, CarouselModule, CardComponent],
})
export class UsuarioHomeComponent implements OnInit {
    aplicacoes$: Observable<Aplicacao[]>;

    constructor(private readonly searchService: SearchService) {}

    ngOnInit(): void {
        this.aplicacoes$ = this.searchService.listAll().pipe(map(res => res.content.flat()));

        this.aplicacoes$.subscribe(aplicacoes => {
            console.log('aplicacoes >>>>', aplicacoes);
        });
    }
}
