package com.api.insightink.insightInk.config;

import com.api.insightink.insightInk.model.ApiKey;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiKeyConfig {

    @Bean
    public ApiKey apiKey() {
        // Replace with your actual API key retrieval logic (e.g., environment variable)
        return new ApiKey("apiKeyString");
    }
}
