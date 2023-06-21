import React from 'react';
import { TextInput, Button, View } from 'react-native';
import { styles } from './styles';

const Input = ({ placeholder, name, onChangeText, buttonColor, buttonTitle, onHandlerButton }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={name}
        onChangeText={onChangeText}
      />
      <Button title={buttonTitle} color={buttonColor} onPress={onHandlerButton} />
    </View>
  );
};
export default Input;
