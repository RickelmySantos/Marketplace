package com.br.marketplace_api.modelo.mappers;

import com.br.core.modelo.EntidadeBaseMapper;
import com.br.marketplace_api.modelo.dtos.AplicacaoDto;
import com.br.marketplace_api.modelo.entidades.Aplicacao;
import org.mapstruct.Mapper;

@Mapper
public interface AplicacaoMapper extends EntidadeBaseMapper<Aplicacao, AplicacaoDto> {


}
