import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.lightGrey,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.black,
  },
  title: {
    color: theme.colors.primary,
    paddingBottom: 20,
    fontSize: 34,
    fontFamily: theme.fonts.bold,
  },
});
