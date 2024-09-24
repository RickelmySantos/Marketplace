package com.br.marketplace_api.configuracao;

import lombok.extern.log4j.Log4j2;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.envers.repository.support.EnversRevisionRepositoryFactoryBean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.ControllerAdvice;

@Configuration
@EntityScan(basePackages = {"com.br.marketplace_api.modelo.entidades"})
@EnableJpaRepositories(basePackages = {"com.br.marketplace_api.repositorios"},
    repositoryFactoryBeanClass = EnversRevisionRepositoryFactoryBean.class)
@ControllerAdvice
@Log4j2
public class Config {

}
