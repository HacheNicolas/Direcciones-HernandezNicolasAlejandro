import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  inputContainer: {
    backgroundColor: theme.colors.white,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  listContainer: {
    flex: 1,
    backgroundColor: theme.colors.lighterGrey,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
});
