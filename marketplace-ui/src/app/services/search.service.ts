import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResultList } from 'src/app/core/pagination/result-list';
import { FilterService } from 'src/app/core/services/filter.service';
import { Aplicacao } from 'src/app/models/aplicacao.model';
import { environment } from 'src/environments/environments';

@Injectable({ providedIn: 'root' })
export class SearchService extends FilterService<Aplicacao> {
  private aplicacao$: Observable<Aplicacao[]>;
  protected readonly http: HttpClient = inject(HttpClient);
  protected PATH: string = environment.apiUrl;

  listAll(): Observable<ResultList<Aplicacao[]>> {
    return this.http.get<ResultList<Aplicacao[]>>(`${this.PATH}/aplicacao`);
  }

  searchItems(): Observable<Aplicacao[]> {
    if (!this.aplicacao$) {
      this.aplicacao$ = this.listAll().pipe(map((res) => res.content.flat()));
    }
    return this.aplicacao$;
  }
}
