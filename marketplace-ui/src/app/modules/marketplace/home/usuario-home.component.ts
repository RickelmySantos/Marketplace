import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { Observable } from 'rxjs';
import { Aplicacao } from 'src/app/models/aplicacao.model';
import { SearchService } from 'src/app/services/search.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'home-usuario-app',
  templateUrl: './usuario-home.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./usuario-home.component.scss'],
  imports: [SharedModule, RouterLink, AsyncPipe, NgFor, NgIf, CarouselModule],
})
export class UsuarioHomeComponent implements OnInit {
  aplicacoes$: Observable<Aplicacao[]>;
  aplicacao: Aplicacao[] = [];

  constructor(private readonly searchService: SearchService) {}

  ngOnInit(): void {
    this.aplicacoes$ = this.searchService.searchItems();
  }
}
