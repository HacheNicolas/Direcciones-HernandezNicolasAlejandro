import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

const Card = ({ children, cardStyle }) => {
  return <View style={[styles.container, cardStyle]}>{children}</View>;
};

export default Card;
