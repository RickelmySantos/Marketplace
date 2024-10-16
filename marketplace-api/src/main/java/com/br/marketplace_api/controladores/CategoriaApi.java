package com.br.marketplace_api.controladores;

import com.br.core.controladores.CrudRestApi;
import com.br.marketplace_api.modelo.dtos.CategoriaDto;
import com.br.marketplace_api.modelo.entidades.Categoria;
import com.br.marketplace_api.modelo.mappers.CategoriaMapper;
import com.br.marketplace_api.servicos.CategoriaService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Getter
// @RequiredArgsConstructor
@RestController
@RequestMapping(CategoriaApi.PATH)
public class CategoriaApi
    implements CrudRestApi<Categoria, CategoriaService, CategoriaDto, CategoriaMapper> {

  public static final String PATH = "/categorias";

  private final CategoriaService service;
  private final CategoriaMapper mapper;

  /**
   * @param service
   * @param mapper
   */
  public CategoriaApi(CategoriaService service, CategoriaMapper mapper) {
    this.service = service;
    this.mapper = mapper;
  }

  @Override
  public String getRequestMapping() {
    // TODO Auto-generated method stub
    return CategoriaApi.PATH;
  }

  @Override
  public CategoriaMapper getMapper() {
    return this.mapper;
  }

  @Override
  public CategoriaService getService() {
    return this.service;
  }
}
