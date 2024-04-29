package com.api.insightink.insightInk.entity;
//import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Column;
import java.time.ZonedDateTime;
import java.util.UUID;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
@Table(name = "sentimentEntity")
public class SentimentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;

    @Column(nullable = false)
    private String note;

    @Column(nullable = true)
    private String sentiment;

    @Column(nullable = false)
    private ZonedDateTime creationDate;

    public SentimentEntity() {
    }

    public SentimentEntity(UUID id, String note, String sentiment, ZonedDateTime creationDate) {
        this.id = id;
        this.note = note;
        this.sentiment = sentiment;
        this.creationDate = creationDate;
    }
    public SentimentEntity(String note, String sentiment) {
        this.id = UUID.randomUUID();
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
