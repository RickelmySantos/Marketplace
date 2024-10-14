import { Injectable } from "@angular/core";
import { CrudService } from "src/app/core/services/crud.service";
import { Usuario } from "src/app/models/usuario.model";


@Injectable()
export class usuarioMarketplace extends CrudService<Usuario>{
  protected override PATH: string = '/usuario';

}
