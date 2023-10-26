//Build Deck
import React from 'react';
import { View, Text, Button } from 'react-native';

 

const BuildCards = ({ navigation }) => {
    const [inputText, setInputText] = useState(''); // State to store the input text
  
    const handleInputChange = (text) => {
      setInputText(text); // Update the state when the input changes
    };
  
    const handleSubmit = () => {
      // Handle the submission of the input (e.g., submit to a server)
      alert(`You entered: ${inputText}`);
    };

  return (
    <View>
      <Text>Build Your Deck</Text>

      <Button
        title="Go back to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default BuildCards;