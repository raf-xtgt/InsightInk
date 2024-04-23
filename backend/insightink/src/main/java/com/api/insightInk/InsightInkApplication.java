package com.api.insightInk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.Map;
import com.google.common.collect.ImmutableMap;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class InsightInkApplication {

	public static void main(String[] args) throws Exception {

//		Map<String, Object> props = ImmutableMap.<String, Object>builder()
//				.put("server.port", 8080).build();
//
//		new SpringApplicationBuilder()
//				.sources(InsightInkApplication.class)
//				.properties(props).run(args);

		SpringApplication.run(InsightInkApplication.class, args);


	}
}
