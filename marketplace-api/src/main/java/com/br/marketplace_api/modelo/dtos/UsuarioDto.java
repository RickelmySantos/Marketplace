package com.br.marketplace_api.modelo.dtos;

import com.br.core.modelo.EntidadeBaseDTO;
import com.br.marketplace_api.modelo.entidades.Usuario;
import jakarta.validation.constraints.NotBlank;
import java.util.List;
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
public class UsuarioDto extends EntidadeBaseDTO<Usuario> {

  @NotBlank
  private String nome;
  @NotBlank
  private String cpf;
  private List<AplicacaoDto> favoritos;
}
