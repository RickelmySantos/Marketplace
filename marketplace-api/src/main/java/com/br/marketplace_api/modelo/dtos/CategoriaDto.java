package com.br.marketplace_api.modelo.dtos;

import com.br.core.modelo.EntidadeBaseDTO;
import com.br.marketplace_api.modelo.entidades.Categoria;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;
import lombok.extern.jackson.Jacksonized;


@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
@ToString(callSuper = true, onlyExplicitlyIncluded = true)
@Jacksonized
public class CategoriaDto extends EntidadeBaseDTO<Categoria> {

  private String nome;
}
