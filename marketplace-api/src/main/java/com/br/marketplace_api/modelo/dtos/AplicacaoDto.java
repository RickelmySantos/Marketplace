package com.br.marketplace_api.modelo.dtos;

import com.br.core.modelo.EntidadeBaseDTO;
import com.br.marketplace_api.modelo.entidades.Aplicacao;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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
public class AplicacaoDto extends EntidadeBaseDTO<Aplicacao> {
  @NotBlank
  @Size(min = 1, max = 100)
  private String nome;
  @Size(max = 2000)
  private String descricao;
  private String sigla;
  private String url;
  private String urlManual;
  private String urlDocumentacaoTecnica;
  private String urlDocumentacaoAPI;
  private String tag;
  private String finalidade;

}
