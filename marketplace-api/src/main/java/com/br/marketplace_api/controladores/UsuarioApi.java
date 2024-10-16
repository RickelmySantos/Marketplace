package com.br.marketplace_api.controladores;

import com.br.core.controladores.CrudRestApi;
import com.br.marketplace_api.modelo.dtos.UsuarioDto;
import com.br.marketplace_api.modelo.entidades.Usuario;
import com.br.marketplace_api.modelo.mappers.UsuarioMapper;
import com.br.marketplace_api.servicos.UsuarioService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Getter
// @RequiredArgsConstructor
@RestController
@RequestMapping(UsuarioApi.PATH)
public class UsuarioApi implements CrudRestApi<Usuario, UsuarioService, UsuarioDto, UsuarioMapper> {
  public static final String PATH = "/usuario";


  private final UsuarioService service;
  private final UsuarioMapper mapper;

  @Autowired
  public UsuarioApi(UsuarioService service, UsuarioMapper mapper) {
    this.service = service;
    this.mapper = mapper;
  }

  @Override
  public String getRequestMapping() {

    return UsuarioApi.PATH;
  }

  @Override
  public UsuarioMapper getMapper() {
    return this.mapper;
  }

  @Override
  public UsuarioService getService() {
    return this.service;
  }
}
