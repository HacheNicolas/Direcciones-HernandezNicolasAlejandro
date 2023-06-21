import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { OrderItems } from '../../components';

const OrdersDetailed = ({ route }) => {
  const { orderTypes, orders } = route.params;
  const ordersDetailedItems = orders.filter((order) => order.orderType == orderTypes);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <OrderItems items={ordersDetailedItems} preview={false} />
      </View>
    </SafeAreaView>
  );
};

export default OrdersDetailed;
