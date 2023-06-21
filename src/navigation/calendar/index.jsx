import Ionicons from '@expo/vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../../constants';
import { Calendar, Maps, NewEvent } from '../../screens';
import { TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const CalendarNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Calendar"
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: theme.colors.text,
        headerTitleStyle: { fontFamily: theme.fonts.bold },
      }}>
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={({ navigation }) => ({
          title: 'CALENDARIO',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('NewEvent')}>
              <Ionicons name="add-circle-outline" size={30} color={theme.colors.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="NewEvent"
        component={NewEvent}
        options={{ title: 'NUEVO EVENTO', headerTitleAlign: 'center' }}
      />
      <Stack.Screen name="Maps" component={Maps} options={{ title: 'Mapa' }} />
    </Stack.Navigator>
  );
};

export default CalendarNavigator;
