import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from './HomeScreen.js';
import BuildCards from './BuildCards.js';
import UseCard from './UseCard.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Build" component={BuildCards} />
                <Stack.Screen name="Use" component={UseCard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default AppNavigator;

