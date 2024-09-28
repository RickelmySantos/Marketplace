import { Entity } from "../core/models/entity.model";
import { Aplicacao } from "./aplicacao.model";


export interface Usuario extends Entity<number> {

  nome: string;
  cpf: string;
  aplicacao: Aplicacao[];


}
