package com.api.insightink.insightInk.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import org.springframework.data.annotation.Id;

import java.time.ZonedDateTime;
import java.util.UUID;

@Entity
@Table(name = "sentiment")
public class SentimentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String note;
    private String sentiment;
    private ZonedDateTime creationDate;

    // Hibernate expects entities to have a no-arg constructor,
    // though it does not necessarily have to be public.
    private SentimentEntity() {}

    public SentimentEntity(UUID id, String note, String sentiment, ZonedDateTime creationDate) {
        this.id = id;
        this.note = note;
        this.sentiment = sentiment;
        this.creationDate = creationDate;
    }

    public SentimentEntity(String note, String sentiment, ZonedDateTime creationDate) {
        this.note = note;
        this.sentiment = sentiment;
        this.creationDate = creationDate;
    }
    public SentimentEntity(String note, String sentiment) {
        this.note = note;
        this.sentiment = sentiment;
        this.creationDate = ZonedDateTime.now();
    }

    public UUID getId() {
        return id;
    }

    public String getNote() {
        return note;
    }

    public String getSentiment() {
        return sentiment;
    }

    public ZonedDateTime getCreationDate() {
        return creationDate;
    }
}