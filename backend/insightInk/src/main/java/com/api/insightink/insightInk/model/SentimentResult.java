package com.api.insightink.insightInk.model;

import java.math.BigDecimal;

public class SentimentResult {
    private BigDecimal score;
    private String classification;

    // Getters and setters

    public SentimentResult(BigDecimal score, String classification) {
        this.score = score;
        this.classification = classification;
    }

    public SentimentResult() {
        this.score = BigDecimal.ZERO;
        this.classification = null;
    }

    public BigDecimal getScore() {
        return score;
    }

    public void setScore(BigDecimal score) {
        this.score = score;
    }

    public String getClassification() {
        return classification;
    }

    public void setClassification(String classification) {
        this.classification = classification;
    }
}
