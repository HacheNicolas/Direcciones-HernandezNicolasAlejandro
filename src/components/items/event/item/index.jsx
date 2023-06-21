import Ionicons from '@expo/vector-icons/Ionicons';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../../../constants';
import Card from '../../../card';

const EventItem = ({ item, onSelectItem }) => {
  return (
    <Card cardStyle={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{item.name}</Text>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.text}>Ubicación: {item.location}</Text>
        <Text style={styles.text}>Fecha: {item.date}</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.description}>Detalle del evento:</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <TouchableOpacity onPress={() => onSelectItem(item.id)} style={styles.manageEvent}>
          <Text style={styles.text}>Gestionar</Text>
          <Ionicons name="arrow-forward" size={22} color={theme.colors.black} />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default EventItem;
