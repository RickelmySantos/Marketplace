package com.br.marketplace_api.modelo.entidades;


import com.br.core.modelo.EntidadeBase;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.FieldNameConstants;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@FieldNameConstants
@Getter
@Setter
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
@ToString(callSuper = true, onlyExplicitlyIncluded = true)
public class Usuario extends EntidadeBase {


  @NotBlank
  @Size(min = 1, max = 100)
  @Column(name = "NM_USUARIO", length = 100, nullable = false)
  private String nome;

  @Column(name = "CPF", length = 11, nullable = false)
  private String cpf;

  @OneToMany()
  @JoinTable(name = "TB_USUARIO_FAVORITO",
      joinColumns = @JoinColumn(name = "ID_USUARIO", nullable = false,
          foreignKey = @ForeignKey(name = "TB_USUARIO_FAVORITO_FK_USUARIO")),
      inverseJoinColumns = @JoinColumn(name = "ID_APLICACAO", nullable = false,
          foreignKey = @ForeignKey(name = "TB_USUARIO_FAVORITO_FK_APLICACAO")),
      uniqueConstraints = {@UniqueConstraint(name = "TB_USUARIO_FAVORITO_UK",
          columnNames = {"ID_USUARIO", "ID_APLICACAO"})})
  @Builder.Default
  private List<Aplicacao> favoritos = new ArrayList<>();
}
