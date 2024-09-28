import { Entity } from "../core/models/entity.model";


export interface Aplicacao extends Entity<number> {
  id: number;
  nome: string;
  descricao: string;
  sigla: string;
  url: string;
  urlManual: string;
  urlDocumentacaoAPI: string;
  tag: string;
  finalidade: string;

}
