import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const Header = ({ show, title }) => {
  if (!title) {
    title = 'Fundación Un Litro De Leche Por Mes Córdoba';
  }
  const Visible = () =>
    show ? (
      <View accessibilityViewIsModal={show} style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    ) : null;

  return <Visible />;
};

export default Header;
