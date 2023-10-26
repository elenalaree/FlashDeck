import React from "react";
import { StyleSheet, Text, View } from 'react-native';


export default function UseFlashCards(){

const flashcards = [
    { question: 'What is the capital of France?', answer: 'Paris', isFlipped: false },
    { question: 'What is the largest planet in the solar system?', answer: 'Jupiter', isFlipped: false },
    
  ];

return (<View style={styles.container}>
<Flashcard flashcards={flashcards} />
<StatusBar style="auto" />
</View>)

};