import { Entity } from "../core/models/entity.model";


export interface Categoria extends Entity<number>{
  id: number;
  nome: string;

}
