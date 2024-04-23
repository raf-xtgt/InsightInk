package com.api.insightink.insightInk.service;

import com.api.insightink.insightInk.model.SentimentResult;
import com.api.insightink.insightInk.model.ApiKey;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.api.insightink.insightInk.utils.BearerTokenAuthInterceptor;

import java.util.Collections;
import java.util.Map;

@Service
public class SentimentService {

    private final String endpointUrl;
    private final RestTemplate restTemplate;

    public SentimentService(ApiKey apiKey) {
        this.endpointUrl = "https://projects/{project-id}/locations/{location}/endpoints/sentiment_analysis";
        this.restTemplate = new RestTemplate();
        restTemplate.setInterceptors(
                Collections.singletonList(new BearerTokenAuthInterceptor(apiKey.getApiKey())));
    }

    public SentimentResult analyzeSentiment(String text) {
        // Replace with your project ID and location
        String url = endpointUrl.replace("{project-id}", "your-project-id")
                .replace("{location}", "us-central1");
        Map<String, String> requestBody = Collections.singletonMap("content", text);
        ResponseEntity<SentimentResult> response = restTemplate.postForEntity(url, requestBody, SentimentResult.class);
        return response.getBody();
    }
}
