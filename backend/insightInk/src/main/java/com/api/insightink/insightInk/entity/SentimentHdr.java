package com.api.insightink.insightInk.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import java.time.ZonedDateTime;
import java.util.UUID;

@Entity
@Table(name = "SentimentHdr")
public class SentimentHdr {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;

    @Column(nullable = false, columnDefinition = "TEXT") // Change column definition to TEXT
    private String note;

    @Column(nullable = true, columnDefinition = "TEXT") // Change column definition to TEXT
    private String sentiment;

    @Column(nullable = false)
    private ZonedDateTime creationDate;

    public SentimentHdr() {
    }

    public SentimentHdr(UUID id, String note, String sentiment, ZonedDateTime creationDate) {
        this.id = id;
        this.note = note;
        this.sentiment = sentiment;
        this.creationDate = creationDate;
    }
    public SentimentHdr(String note, String sentiment) {
        this.id = null;
        this.note = note;
        this.sentiment = sentiment;
        this.creationDate = ZonedDateTime.now();
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getSentiment() {
        return sentiment;
    }

    public void setSentiment(String sentiment) {
        this.sentiment = sentiment;
    }

    public ZonedDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(ZonedDateTime creationDate) {
        this.creationDate = creationDate;
    }
}
