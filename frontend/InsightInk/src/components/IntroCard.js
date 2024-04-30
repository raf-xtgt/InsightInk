import React from 'react';
import { Card, Button, Paragraph } from 'react-native-paper';

const IntroCard = () => {
  return (
    <Card>
      <Card.Title title="Welcome to InsightInk!" />
      <Card.Content>
        <Paragraph>
          InsightInk helps you track your thoughts and emotions, providing valuable insights to improve your well-being.
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Get Started</Button>
      </Card.Actions>
    </Card>
  );
};

export default IntroCard;
