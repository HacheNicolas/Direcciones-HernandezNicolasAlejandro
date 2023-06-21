import Ionicons from '@expo/vector-icons/Ionicons';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../../../constants';
import Card from '../../../card';

const OrderItem = ({ item, onSelectItem, preview }) => {
  let orderStyle;
  let description;
  let amount;

  if (item.orderState === 'Rechazada') {
    orderStyle = styles.orderRejected;
  } else if (item.orderState === 'Aceptada') {
    orderStyle = styles.orderAccepted;
  } else {
    orderStyle = styles.orderPending;
  }

  if (!item.description) {
    description = 'No se especificó una descripción';
  } else {
    description = item.description;
  }

  if (!item.amount) {
    amount = '0';
  } else {
    amount = item.amount;
  }

  const Content = () =>
    preview ? (
      <Card cardStyle={styles.cardContainer}>
        <View style={styles.previewContainer}>
          <Text
            numberOfLines={1}
            style={{
              ...styles.description,
              width: '80%',
            }}>
            {description}
          </Text>
          <Text style={orderStyle}>{item.orderState}</Text>
        </View>
      </Card>
    ) : (
      <Card cardStyle={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <Text style={orderStyle}>{item.orderState}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.description}>Detalle de la solicitud:</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.text}>Monto: $ {amount}</Text>
          <TouchableOpacity onPress={() => onSelectItem(item.id)} style={styles.manageOrder}>
            <Text style={styles.text}>Gestionar</Text>
            <Ionicons name="arrow-forward" size={22} color={theme.colors.black} />
          </TouchableOpacity>
        </View>
      </Card>
    );

  return <Content />;
};

export default OrderItem;
