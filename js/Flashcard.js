import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';


const Flashcard = ({ flashcards }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        if(isFlipped){
            setIsFlipped(false);
            setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
            setIsFlipped(false);
            
    } else {
        setIsFlipped(true);
    }
    };


    return (
        <TouchableOpacity onPress={flipCard}>
            <View style={styles.card}>
                <Text style={styles.text}>
                    {isFlipped ? flashcards[currentCardIndex].answer : flashcards[currentCardIndex].question}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 400,
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

export default Flashcard;