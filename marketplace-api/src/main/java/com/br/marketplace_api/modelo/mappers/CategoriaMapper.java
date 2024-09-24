package com.br.marketplace_api.modelo.mappers;

import com.br.core.modelo.EntidadeBaseMapper;
import com.br.marketplace_api.modelo.dtos.CategoriaDto;
import com.br.marketplace_api.modelo.entidades.Categoria;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CategoriaMapper extends EntidadeBaseMapper<Categoria, CategoriaDto> {


}
