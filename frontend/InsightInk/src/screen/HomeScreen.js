import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { getSentiments } from '../services/ApiService';
import { Card, Paragraph } from 'react-native-paper'; // Assuming you're using Paper for Card component
// import { IntroCard } from '../components/IntroCard';

function HomeScreen() {
  const [sentiments, setSentiments] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const fetchSentiments = async () => {
      try {
        const url = 'http://192.168.1.17:8080/get-sentiments';
        const response = await getSentiments(url);
        console.log("ping")
        // console.log('Sentiments:', response);
        setSentiments(response);
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    };
    // Call the function when the component mounts
    fetchSentiments();

  },5000);
  const toggleExpand = (id) => {
    setExpandedCard(id === expandedCard ? null : id);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
          <Card style={styles.introCard}>
            <Card.Title title="Welcome to InsightInk!" />
            <Card.Content>
              <Paragraph>
                InsightInk helps you track your thoughts and emotions, providing valuable insights to improve your well-being.
              </Paragraph>
            </Card.Content>
        </Card>

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
    </View>

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
    flex: 1,
    padding:10
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#caf0f8',
    marginVertical: 10,
    elevation: 3,
    // overflow:'scroll'
  },
  introCard: {
    backgroundColor: '#00b4d8',
    borderColor: '#2980b9',
    color:'white',
    padding:10, 
  },
});

HomeScreen.navigationOptions = {
  headerTitle: 'InsightInk',
};

export default HomeScreen;
