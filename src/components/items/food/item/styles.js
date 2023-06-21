import { StyleSheet } from 'react-native';
import { theme } from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    marginVertical: 4,
  },
  item: {
    marginHorizontal: 10,
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fonts.bold,
  },
});
