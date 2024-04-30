import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { getSentiments } from '../services/ApiService';
import { Card } from 'react-native-paper'; // Assuming you're using Paper for Card component

function HomeScreen() {
  const [sentiments, setSentiments] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const fetchSentiments = async () => {
      try {
        const url = 'http://192.168.1.17:8080/get-sentiments';
        const response = await getSentiments(url);
        console.log('Sentiments:', response);
        setSentiments(response);
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    };
    // Call the function when the component mounts
    fetchSentiments();

  });
  const toggleExpand = (id) => {
    setExpandedCard(id === expandedCard ? null : id);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {sentiments.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => toggleExpand(item.id)}>
          <Card style={styles.card}>
            <Card.Title title={item.note} />
            {expandedCard === item.id && (
              <Card.Content>
                <Text>{item.sentiment}</Text>
              </Card.Content>
            )}
            <Card.Actions>
              <Text>{formatDate(item.creationDate)}</Text>
            </Card.Actions>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

// Function to format date in dd-mm-yyyy HH:mm
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = `${('0' + date.getDate()).slice(-2)}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
  return formattedDate;
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    marginVertical: 10,
  },
});

HomeScreen.navigationOptions = {
  headerTitle: 'InsightInk',
};

export default HomeScreen;
