package com.api.insightink.insightInk.controller;
//import com.api.insightink.insightInk.entity.SentimentEntity;
import com.api.insightink.insightInk.model.Sentiment;
import com.api.insightink.insightInk.repository.SentimentRepository;
import com.api.insightink.insightInk.service.SentimentService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SentimentController {
    private final SentimentRepository sentimentRepository;
    public SentimentController(SentimentRepository sentimentRepository) {
        this.sentimentRepository = sentimentRepository;
    }
    @GetMapping("/get-sentiment")
    public String index() {
        return "Greetings from Spring Boot!";
    }
    @PostMapping(value = "/init-sentiment", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Sentiment analyze(@RequestBody final Sentiment sentimentContainer) {
        System.out.println(sentimentContainer.getNote());
        return new SentimentService(this.sentimentRepository ).performSentimentAnalysis(sentimentContainer);
    }


}
