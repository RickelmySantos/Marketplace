package com.br.marketplace_api;

import com.br.core.configuracoes.SwaggerConfig;
import com.br.core.configuracoes.WebSecurityConfig;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
@EnableConfigurationProperties
@ConfigurationPropertiesScan("com.br.marketplace_api.configuracao")
public class MarketplaceApiApplication {

  @Autowired
  private ApplicationContext context;

  public static void main(String[] args) {
    SpringApplication.run(MarketplaceApiApplication.class, args);
  }


  @PostConstruct
  public void checkBeans() {
    boolean swaggerConfigLoaded = this.context.containsBean("swaggerConfig");
    boolean webSecurityConfigLoaded = this.context.containsBean("webSecurityConfig");

    System.out.println("SwaggerConfig loaded: " + swaggerConfigLoaded);
    System.out.println("WebSecurityConfig loaded: " + webSecurityConfigLoaded);

    // Verificando também pelo tipo da classe
    boolean swaggerConfigTypeLoaded = this.context.getBeansOfType(SwaggerConfig.class).size() > 0;
    boolean webSecurityConfigTypeLoaded =
        this.context.getBeansOfType(WebSecurityConfig.class).size() > 0;

    System.out.println("SwaggerConfig (by type) loaded: " + swaggerConfigTypeLoaded);
    System.out.println("WebSecurityConfig (by type) loaded: " + webSecurityConfigTypeLoaded);
  }


}
