package com.br.marketplace_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties
@ConfigurationPropertiesScan("com.br.marketplace_api.configuracao")
public class MarketplaceApiApplication {

  public static void main(String[] args) {
    SpringApplication.run(MarketplaceApiApplication.class, args);
  }

}
