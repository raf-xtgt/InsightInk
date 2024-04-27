package com.api.insightink.insightInk.controller;
import com.api.insightink.insightInk.service.SentimentService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SentimentController {
    @GetMapping("/get-sentiment")
    public String index() {
        return "Greetings from Spring Boot!";
    }
    @PostMapping(value = "/init-sentiment", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void analyze(@RequestBody String text) {
        new SentimentService().performSentimentAnalysis();
    }


}
