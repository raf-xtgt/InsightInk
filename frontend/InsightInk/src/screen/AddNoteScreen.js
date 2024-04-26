import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native';

function AddNoteScreen() {
  const [note, setNote] = useState('');
  const [sentimentResult, setSentimentResult] = useState('');
  // Function to handle analyzing sentiment (replace it with your actual logic)
  const analyzeSentiment = () => {
    // Perform sentiment analysis here and update sentimentResult state
    setSentimentResult('Positive');
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
