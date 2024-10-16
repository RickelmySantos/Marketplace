package com.br.marketplace_api.servicos;

import com.br.core.servicos.CrudService;
import com.br.marketplace_api.modelo.entidades.Categoria;
import com.br.marketplace_api.repositorios.CategoriaRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Getter
// @RequiredArgsConstructor
@Service
public class CategoriaService implements CrudService<Categoria, CategoriaRepository> {

  private final CategoriaRepository categoriaRepository;

  /**
   * @param categoriaRepository
   */
  public CategoriaService(CategoriaRepository categoriaRepository) {
    this.categoriaRepository = categoriaRepository;
  }

  @Override
  public CategoriaRepository getRepository() {

    return this.categoriaRepository;
  }

}
