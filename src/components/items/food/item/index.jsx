import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const FoodItem = ({ item, onSelectItem }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelectItem(item.id)}>
      <Text style={styles.item}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default FoodItem;
