package com.br.marketplace_api.servicos;

import com.br.core.servicos.CrudService;
import com.br.marketplace_api.modelo.entidades.Aplicacao;
import com.br.marketplace_api.repositorios.AplicacaoRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Getter
@RequiredArgsConstructor
@Service
public class AplicacaoService implements CrudService<Aplicacao, AplicacaoRepository> {

  private final AplicacaoRepository aplicacaoRepository;

  @Override
  public AplicacaoRepository getRepository() {
    return this.aplicacaoRepository;
  }

}
