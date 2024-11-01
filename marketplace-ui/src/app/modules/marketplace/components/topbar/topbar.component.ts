import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { debounceTime, filter, Observable } from 'rxjs';
import { BaseComponent } from 'src/app/core/util/base.component';
import { Aplicacao } from 'src/app/models/aplicacao.model';
import { ActionButtonComponent } from 'src/app/modules/marketplace/components/actions/action-button.component';
import { TopBarHeaderComponent } from 'src/app/modules/marketplace/components/topbar/topbar-header/topbar-header.component';
import { SearchService } from 'src/app/services/search.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'topbar-app',
    templateUrl: './topbar.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [SharedModule, RouterLink, ReactiveFormsModule, ButtonModule, TopBarHeaderComponent, ActionButtonComponent],
})
export class TopbarComponent extends BaseComponent {
    protected readonly searchService: SearchService = inject(SearchService);

    searchControl = new FormControl('');

    filter$: Observable<Aplicacao[]>;
    aplicacao: Aplicacao[] = [];

    constructor() {
        super();
    }

    override ngOnInit(): void {
        this.searchControl.valueChanges
            .pipe(
                debounceTime(300),
                filter(query => query !== null)
            )
            .subscribe(query => this.searchService.setSearchQuery(query));
        this.filter$ = this.searchService.filterItems(
            this.aplicacao,
            (item, query) => item.nome.toLowerCase().includes(query.toLowerCase()) || item.descricao.toLowerCase().includes(query.toLowerCase())
        );
    }
}
