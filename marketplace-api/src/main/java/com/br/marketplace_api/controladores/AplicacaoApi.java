package com.br.marketplace_api.controladores;

import com.br.core.controladores.CrudRestApi;
import com.br.marketplace_api.modelo.dtos.AplicacaoDto;
import com.br.marketplace_api.modelo.entidades.Aplicacao;
import com.br.marketplace_api.modelo.mappers.AplicacaoMapper;
import com.br.marketplace_api.servicos.AplicacaoService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Getter
@RequiredArgsConstructor
@RestController
@RequestMapping()
public class AplicacaoApi
    implements CrudRestApi<Aplicacao, AplicacaoService, AplicacaoDto, AplicacaoMapper> {
  public static final String PATH = "/aplicacao";

  private final AplicacaoService service;
  private final AplicacaoMapper mapper;

  @Override
  public String getRequestMapping() {

    return AplicacaoApi.PATH;
  }



}
