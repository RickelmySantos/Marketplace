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
@Entity
@NoArgsConstructor
@FieldNameConstants
@Getter
@Setter
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
@Table(name = "TB_APLICACAO")
public class Aplicacao extends EntidadeBase {

  @NotBlank
  @Size(min = 1, max = 100)
  @Column(name = "NM_APLICACAO", length = 100, nullable = false)
  private String nome;

  @Size(max = 2000)
  @Column(name = "DS_APLICACAO", length = 2000)
  private String descricao;

  @Column(name = "SG_APLICACAO", length = 2000)
  private String sigla;

  @Column(name = "URL", length = 200)
  private String url;

  @Column(name = "URL_MANUAL", length = 200)
  private String urlManual;

  @Column(name = "URL_DOC_TECNICA", length = 200)
  private String urlDocumentacaoTecnica;

  @Column(name = "URL_DOC_API", length = 200)
  private String urlDocumentacaoAPI;

  @Column(name = "TAG", length = 200)
  private String tag;

  @Column(name = "finalidade", length = 500)
  private String finalidade;
}
