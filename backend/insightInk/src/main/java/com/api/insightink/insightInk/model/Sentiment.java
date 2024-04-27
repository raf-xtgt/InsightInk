package com.api.insightink.insightInk.model;

public class Sentiment {
    private final String note;
    private final String sentiment;

    public Sentiment(String note, String sentiment) {
        this.note = note;
        this.sentiment = sentiment;
    }

    public String getNote() {
        return note;
    }

    public String getSentiment() {
        return sentiment;
    }
}
