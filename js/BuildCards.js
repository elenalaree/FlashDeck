//Build Deck
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const BuildCards = ({ navigation }) => {
  const [deckName, setDeckName] = useState('');
  const [inputText1, setInputText1] = useState('');
  const [inputText2, setInputText2] = useState('');
  const [cards, setCards] = useState([]);

  const handleDeckNameChange = (text) => {
    setDeckName(text);
  };

  const handleInputChange1 = (text) => {
    setInputText1(text);
  };

  const handleInputChange2 = (text) => {
    setInputText2(text);
  };

  const handleAddCard = () => {
    if(inputText1 !== "" || inputText2 !== ""){
    const newCard = {
      question: inputText1,
      answer: inputText2,
      isFlipped: false, // Initialize isFlipped to false for new cards
    };
    setCards((prevCards) => [...prevCards, newCard]);
    setInputText1(''); // Clear input 1
    setInputText2(''); // Clear input 2
    console.log(cards)
    } else {
      console.log("Please insert questions or answers.")
    }
    
  };

  const handleFinishDeck = async () => {
    try {
      let fullDecks = [];
      
      // Retrieve existing data from local storage
      const localStore = await AsyncStorage.getItem('deckKey');
      if (localStore !== null) {
        // If existing data exists, parse it into an array
        fullDecks = JSON.parse(localStore);
      }
      
      const deck = 
        {
          name: deckName,
          cards: cards,
        };
      
      fullDecks.push(deck);
      const finalDecks = JSON.stringify(fullDecks);
      
      // Save the updated decks back to local storage
      await AsyncStorage.setItem('deckKey', finalDecks);
      
      console.log('Deck saved to Local:', finalDecks);
      
      setDeckName('');
      setCards([]);
      navigation.navigate('Home', {newDeckAdded: true})
    } catch (error) {
      console.error('Error saving deck', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Deck Name:</Text>
      <TextInput
        style={styles.input}
        value={deckName}
        onChangeText={handleDeckNameChange}
        placeholder="Enter deck name"
      />

      <Text style={styles.label}>Question:</Text>
      <TextInput
        style={styles.input}
        value={inputText1}
        onChangeText={handleInputChange1}
        placeholder="Type question here"
      />

      <Text style={styles.label}>Answer:</Text>
      <TextInput
        style={styles.input}
        value={inputText2}
        onChangeText={handleInputChange2}
        placeholder="Type answer here"
      />

      <Button title="Add Card" onPress={handleAddCard} />
      <Button title="Finish Deck" onPress={handleFinishDeck} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 18,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 8,
  },
});

export default BuildCards;