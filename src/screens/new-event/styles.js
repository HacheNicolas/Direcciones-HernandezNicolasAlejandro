import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
    margin: 20,
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
    paddingBottom: 5,
    fontSize: 22,
    fontFamily: theme.fonts.medium,
  },
  input: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    padding: 5,
  },
});
