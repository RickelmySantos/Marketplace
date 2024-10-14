import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { debounceTime, filter, Observable } from 'rxjs';
import { Aplicacao } from 'src/app/models/aplicacao.model';
import { SearchService } from 'src/app/services/search.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'topbar-app',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [SharedModule, RouterLink, ReactiveFormsModule, ButtonModule],
})
export class TopbarComponent implements OnInit {
  protected readonly searchService: SearchService = inject(SearchService);

  searchControl = new FormControl('');

  filter$: Observable<Aplicacao[]>;
  aplicacao: Aplicacao[] = [];

  constructor() {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        filter((query) => query !== null)
      )
      .subscribe((query) => this.searchService.setSearchQuery(query));
    this.filter$ = this.searchService.filterItems(
      this.aplicacao,
      (item, query) =>
        item.nome.toLowerCase().includes(query.toLowerCase()) ||
        item.descricao.toLowerCase().includes(query.toLowerCase())
    );
  }
}
