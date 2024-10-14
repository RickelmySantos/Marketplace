import { Injectable } from "@angular/core";
import { CrudService } from "src/app/core/services/crud.service";
import { Aplicacao } from "src/app/models/aplicacao.model";


@Injectable()
export class AplicacaoService extends CrudService<Aplicacao>{
  protected override PATH: string = '/aplicacao';

}
