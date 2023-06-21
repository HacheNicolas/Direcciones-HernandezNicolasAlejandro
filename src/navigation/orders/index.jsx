import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../../constants';
import { Orders, OrdersDetailed } from '../../screens';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: theme.colors.text,
        headerTitleStyle: { fontFamily: theme.fonts.bold },
      }}>
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{ title: 'PEDIDOS', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="OrdersDetailed"
        component={OrdersDetailed}
        options={({ route }) => ({
          title: route.params.name,
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
