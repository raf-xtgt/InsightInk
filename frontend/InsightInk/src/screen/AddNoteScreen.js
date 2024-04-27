import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createSentiment } from '../services/ApiService';


function AddNoteScreen() {
  const [note, setNote] = useState('');
  const [sentimentResult, setSentimentResult] = useState('');
  // Function to handle analyzing sentiment (replace it with your actual logic)
  const analyzeSentiment = async () => {
    try {
      console.log("note", note)
      const url = 'http://192.168.1.17:8080/init-sentiment'; // Replace with your actual API endpoint
      const data = { }; // Assuming your data is in the format expected by your API

      const response = await createSentiment(url, data);
      console.log('Sentiment analysis result:', response);
      // setSentimentResult(response.sentiment); // Assuming the response contains sentiment information
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="Write your note here..."
        value={note}
        onChangeText={setNote}
      />
      <TouchableOpacity style={styles.button} onPress={analyzeSentiment}>
        <Text style={styles.buttonText}>Analyze Sentiment</Text>
      </TouchableOpacity>
      <TextInput
        style={[styles.textInput, { marginTop: 20, height: 100, textAlignVertical: 'top', readOnly: true }]}
        multiline
        placeholder="Sentiment Result"
        value={sentimentResult}
        editable={false}
      />
    </View>
  );
}

AddNoteScreen.navigationOptions = {
  headerTitle: "InsightInk"
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  textInput: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8ecae6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddNoteScreen;
