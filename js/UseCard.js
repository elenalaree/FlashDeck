import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from "@react-navigation/native";


export default function UseFlashCards({ route }) {
  const route = useRoute();
  const { deckname } = route.params;


  return (<View style={styles.container}>
    <Flashcard flashcards={flashcards} />
    <StatusBar style="auto" />
  </View>)

};