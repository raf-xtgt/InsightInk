import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Keyboard } from 'react-native';
import { createSentiment } from '../services/ApiService';


function AddNoteScreen() {
  const [note, setNote] = useState('');
  const [sentimentResult, setSentimentResult] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading status


  useEffect(() => {
    setNote('')
    setSentimentResult('')
  },[]);

  const analyzeSentiment = async () => {
    try {
      setLoading(true); // Set loading to true when analyzing sentiment
      // console.log("note", note)
      const url = 'http://192.168.1.17:8080/init-sentiment'; // Replace with your actual API endpoint
      const data = { 
        note:note,
        sentiment:""
      };
      Keyboard.dismiss();

      const response = await createSentiment(url, data);
      console.log('Sentiment analysis result:', response);
      setSentimentResult(response.sentiment); // Assuming the response contains sentiment information
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }finally{
      setLoading(false);
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
      
      <View style={styles.resultContainer}>
      {loading ? (
          <ActivityIndicator size="large" color="#8ecae6" />) : 
          ( <TextInput
              style={styles.resultTextInput}
              multiline
              placeholder="Sentiment Result"
              showSoftInputOnFocus={false}
              value={sentimentResult}
              editable={!loading}
            />
          )}
      </View>
    </View>
  );
}

AddNoteScreen.navigationOptions = {
  headerTitle: "InsightInk"
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
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
  resultContainer: {
    marginTop:10,
    width: '100%',
    height: 200, // Set fixed height
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'scroll', // Allow scrolling
    // adjusting the loading
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  resultTextInput: {
    width: '100%',
    height: '100%', // Fill parent container
    padding: 10,
  },
});

export default AddNoteScreen;
