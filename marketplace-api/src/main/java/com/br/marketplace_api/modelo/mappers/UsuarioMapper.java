package com.br.marketplace_api.modelo.mappers;

import com.br.core.modelo.EntidadeBaseMapper;
import com.br.marketplace_api.modelo.dtos.UsuarioDto;
import com.br.marketplace_api.modelo.entidades.Usuario;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UsuarioMapper extends EntidadeBaseMapper<Usuario, UsuarioDto> {


}
