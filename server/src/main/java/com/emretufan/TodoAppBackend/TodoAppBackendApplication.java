package com.emretufan.TodoAppBackend;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TodoAppBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoAppBackendApplication.class, args);
	}

	@Bean
	public OpenAPI openApiConfig() {
		return new OpenAPI().info(apiInfo());
	}

	public Info apiInfo() {
		Info info = new Info();
		info
				.title("Todo App API")
				.description("Mustafa Emre TUFAN Final Project Todo App API")
				.version("v.1.0.0");
		return info;
	}

}
