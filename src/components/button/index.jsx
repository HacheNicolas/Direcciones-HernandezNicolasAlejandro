import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Button = ({
  text,
  value,
  textStyle,
  buttonStyle,
  onSelect,
  onHandler,
  onPressButton,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle]}
      /* onPressIn={() => onSelect(value)}
      onPressOut={() => onHandler()} */
      onPress={() => onPressButton()}
      disabled={disabled}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
