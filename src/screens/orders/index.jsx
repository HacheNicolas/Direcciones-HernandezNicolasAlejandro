import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { OrderItems } from '../../components';
import { useSelector } from 'react-redux';

const Orders = ({ navigation }) => {
  const orders = useSelector((state) => state.orders.data);

  const donations = orders.filter((order) => order.orderType == 'Donacion');
  const requests = orders.filter((order) => order.orderType == 'Solicitud');

  const onSelectDonation = () => {
    navigation.navigate('OrdersDetailed', {
      name: 'DONACIONES',
      orderTypes: 'Donacion',
      orders: orders,
    });
  };

  const onSelectRequests = (items) => {
    navigation.navigate('OrdersDetailed', {
      name: 'SOLICITUDES',
      orderTypes: 'Solicitud',
      orders: orders,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <OrderItems
          items={donations}
          preview={true}
          title={'Donaciones'}
          onSelectList={onSelectDonation}
        />
      </View>
      <View style={styles.sectionContainer}>
        <OrderItems
          items={requests}
          preview={true}
          title={'Solicitudes'}
          onSelectList={onSelectRequests}
        />
      </View>
    </SafeAreaView>
  );
};

export default Orders;
