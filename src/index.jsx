import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import { init } from './db';
import AppNavigator from './navigation';
import { theme } from './constants';
import { styles } from './styles';

init()
  .then(() => {
    console.log('Base de datos inicializada exitosamente.');
  })
  .catch((err) => {
    console.log('Inicialización de base de datos fallida.');
    console.log(err);
  });

export default function App() {
  const [loaded] = useFonts({
    'Oswald-Bold': require('../assets/fonts/Oswald-Bold.ttf'),
    'Oswald-ExtraLight': require('../assets/fonts/Oswald-ExtraLight.ttf'),
    'Oswald-Light': require('../assets/fonts/Oswald-Light.ttf'),
    'Oswald-Medium': require('../assets/fonts/Oswald-Medium.ttf'),
    'Oswald-Regular': require('../assets/fonts/Oswald-Regular.ttf'),
    'Oswald-SemiBold': require('../assets/fonts/Oswald-SemiBold.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <Provider store={store} style={styles.container}>
      <AppNavigator />
    </Provider>
  );
}
