package com.br.marketplace_api.controladores;

import com.br.core.controladores.CrudRestApi;
import com.br.marketplace_api.modelo.dtos.AplicacaoDto;
import com.br.marketplace_api.modelo.entidades.Aplicacao;
import com.br.marketplace_api.modelo.mappers.AplicacaoMapper;
import com.br.marketplace_api.servicos.AplicacaoService;
import lombok.Getter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Getter
// @RequiredArgsConstructor
@RestController
@RequestMapping(AplicacaoApi.PATH)
public class AplicacaoApi
    implements CrudRestApi<Aplicacao, AplicacaoService, AplicacaoDto, AplicacaoMapper> {
  public static final String PATH = "/aplicacao";

  private final AplicacaoService service;
  private final AplicacaoMapper mapper;

  /**
   * @param service
   * @param mapper
   */
  public AplicacaoApi(AplicacaoService service, AplicacaoMapper mapper) {
    this.service = service;
    this.mapper = mapper;
  }

  @Override
  public String getRequestMapping() {

    return AplicacaoApi.PATH;
  }

  @Override
  public AplicacaoMapper getMapper() {
    return this.mapper;
  }

  @Override
  public AplicacaoService getService() {
    return this.service;
  }

}
