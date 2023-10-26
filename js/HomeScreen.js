// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>FlashDeck</Text>
            <Button
                title="Build FlashCard Deck"
                onPress={() => navigation.navigate('Build')}

            />
            <Text>Which deck would you like to use?</Text>
            <Button
                title="Dummy Flashcard Deck"
                onPress={() => navigation.navigate('Build')}

            />
        </View>
    );
};

export default HomeScreen;