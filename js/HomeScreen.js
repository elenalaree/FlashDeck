// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {

    const emptyDecks = async () => {
        try {
            await AsyncStorage.clear(); // Clear all items in local storage
            console.log('Local storage cleared.');
        } catch (error) {
            console.error('Error clearing local storage:', error);
        }
    };

    const [deckNames, setDeckNames] = useState([]);

    useEffect(() => {
        fetchDeckNames();
    }, [])

    const fetchDeckNames = async () => {
        try {
            // Get all keys from local storage
            const keys = await AsyncStorage.getItem('deckKey');

            if (keys) {
                // Parse the JSON string back to an array of deck names
                const decks = JSON.parse(keys);
                const names = decks.map((deck) => deck.name);
                setDeckNames(names);
            }
        } catch (error) {
            console.error('Error fetching deck names from local storage:', error);
        }
    };

    const handleDeckButtonPress = (deckName) => {
        navigation.navigate('Use', { deckName });

    };

    return (
        <View>
            <Text style={[styles.center, styles.headArea]}>Flash Deck</Text>
            <Button
                title="Build FlashCard Deck"
                onPress={() => navigation.navigate('Build')}

            />
            <Text style={styles.center}>Which deck would you like to use?</Text>
            {deckNames.map((deckName, index) => (
                <Button
                    key={index}
                    title={deckName}
                    onPress={() => handleDeckButtonPress(deckName)}
                />
            ))}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.clear} onPress={emptyDecks}>
                    <Text style={styles.textBtn}>Clear All Decks</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headArea: {
        fontSize: 30
    },
    clear: {
        backgroundColor: '#811',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    buttonContainer: {
        marginTop: 20
    },
    textBtn: {
        color: '#fff',

    },
    center: {
        textAlign: 'center',
        marginBottom: 10,
    }

});

export default HomeScreen;