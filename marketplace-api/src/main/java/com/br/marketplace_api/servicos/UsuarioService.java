package com.br.marketplace_api.servicos;

import com.br.core.servicos.CrudService;
import com.br.marketplace_api.modelo.entidades.Usuario;
import com.br.marketplace_api.repositorios.UsuarioRepository;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Getter
// @RequiredArgsConstructor
@Service
public class UsuarioService implements CrudService<Usuario, UsuarioRepository> {

  private final UsuarioRepository usuarioRepository;

  @Override
  public UsuarioRepository getRepository() {
    return this.usuarioRepository;
  }

  @Autowired
  public UsuarioService(UsuarioRepository usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }
}
