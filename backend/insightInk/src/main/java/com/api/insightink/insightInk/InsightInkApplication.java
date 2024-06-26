package com.api.insightink.insightInk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
@EntityScan
@SpringBootApplication
public class InsightInkApplication {

	public static void main(String[] args) {
		SpringApplication.run(InsightInkApplication.class, args);
	}
}
