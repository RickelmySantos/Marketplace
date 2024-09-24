package com.br.marketplace_api.modelo.entidades;

import com.br.core.modelo.EntidadeBase;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldNameConstants;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@NoArgsConstructor
@Getter
@Setter
@FieldNameConstants
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
@Entity
@Table(name = "TB_CATEGORIA")
public class Categoria extends EntidadeBase {

  @NotBlank
  @Size(min = 3, max = 50)
  @Column(name = "NM_CATEGORIA", length = 50, nullable = false)
  private String nome;
}
