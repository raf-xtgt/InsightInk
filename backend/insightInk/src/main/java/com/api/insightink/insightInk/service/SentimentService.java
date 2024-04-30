package com.api.insightink.insightInk.service;
import com.api.insightink.insightInk.entity.SentimentHdr;
import com.api.insightink.insightInk.model.Sentiment;
import com.api.insightink.insightInk.repository.SentimentRepository;
import com.google.cloud.vertexai.VertexAI;
import com.google.cloud.vertexai.api.GenerateContentResponse;
import com.google.cloud.vertexai.generativeai.ChatSession;
import com.google.cloud.vertexai.generativeai.GenerativeModel;
import com.google.cloud.vertexai.generativeai.ResponseHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.ZonedDateTime;
import java.util.UUID;

@Service
public class SentimentService {

    @Autowired
    private SentimentRepository sentimentRepository;
    public SentimentService(SentimentRepository sentimentRepository) {
        this.sentimentRepository = sentimentRepository;
    }
    public Sentiment performSentimentAnalysis(final Sentiment payload) {
        System.out.println(payload.getNote());
        try (VertexAI vertexAI = new VertexAI("eng-hash-421213", "us-central1")) {
            GenerateContentResponse response;

            GenerativeModel model = new GenerativeModel("gemini-1.0-pro", vertexAI);
            ChatSession chatSession = new ChatSession(model);

            response = chatSession.sendMessage(payload.getNote());
            System.out.println(ResponseHandler.getText(response));

            SentimentHdr sentimentEntity = new SentimentHdr();
            sentimentEntity.setId(UUID.randomUUID());
            sentimentEntity.setSentiment(response.toString());
            sentimentEntity.setNote(payload.getNote());
            sentimentEntity.setCreationDate(ZonedDateTime.now());

            // No need to manually set the ID, let Hibernate handle it
            this.sentimentRepository.save(sentimentEntity);

            return new Sentiment(payload.getNote(), ResponseHandler.getText(response));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
