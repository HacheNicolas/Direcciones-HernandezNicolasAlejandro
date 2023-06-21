import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../../constants';
import { Stock } from '../../screens';

const Stack = createNativeStackNavigator();

const StockNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Stock"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: theme.colors.text,
        headerTitleStyle: { fontFamily: theme.fonts.bold },
      }}>
      <Stack.Screen
        name="Stock"
        component={Stock}
        options={{ title: 'STOCK', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
};

export default StockNavigator;
