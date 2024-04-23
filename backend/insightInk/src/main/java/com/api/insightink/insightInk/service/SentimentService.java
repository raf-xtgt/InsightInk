package com.api.insightink.insightInk.service;

import com.google.cloud.vertexai.VertexAI;
import com.google.cloud.vertexai.api.GenerateContentResponse;
import com.google.cloud.vertexai.generativeai.ChatSession;
import com.google.cloud.vertexai.generativeai.GenerativeModel;
import com.google.cloud.vertexai.generativeai.ResponseHandler;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class SentimentService {

    public static void performSentimentAnalysis(){
        try (VertexAI vertexAI = new VertexAI("eng-hash-421213", "us-central1")) {
            GenerateContentResponse response;

            GenerativeModel model = new GenerativeModel("gemini-1.0-pro", vertexAI);
            ChatSession chatSession = new ChatSession(model);

            response = chatSession.sendMessage("Hello.");
            System.out.println(ResponseHandler.getText(response));

            response = chatSession.sendMessage("What are all the colors in a rainbow?");
            System.out.println(ResponseHandler.getText(response));

            response = chatSession.sendMessage("Why does it appear when it rains?");
            System.out.println(ResponseHandler.getText(response));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
