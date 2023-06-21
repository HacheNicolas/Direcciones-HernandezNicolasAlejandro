import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    width: '70%',
    padding: 2,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    color: theme.colors.black,
  },
});
