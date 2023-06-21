import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'space-around',
  },
  sectionContainer: {
    maxHeight: '50%',
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
