import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from "@react-navigation/native";
import Flashcard from "./Flashcard";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UseFlashCards({ route }) {
  const { deckName } = route.params;
  const [flashcards, setFlashcards] = useState([]);
  console.log(deckName);

  const fetchDeck = async () => {
    try {
      // Get all keys from local storage
      const keys = await AsyncStorage.getItem('deckKey');
      const decks = JSON.parse(keys);
      const deck = decks.find((deck) => deck.name == deckName);
      if (deck) {
        setFlashcards(deck.cards);
      }
      console.log(decks)

    } catch (error) {
      console.error('Error fetching deck names from local storage:', error);
    }
  };
  useEffect(() => {
    fetchDeck();
  }, []);
  return (<View style={styles.container}>
    {flashcards.length > 0 ? (
        <Flashcard flashcards={flashcards} />
      ) : (
        <Text>No flashcards available for this deck.</Text>
      )}
  </View>)

};

const styles = StyleSheet.create({
  card: {
    width: 500,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 18,
  },
  text: {
    fontSize: 18,
  },
});