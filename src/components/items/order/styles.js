import { StyleSheet } from 'react-native';
import { theme } from '../../../constants';

export const styles = StyleSheet.create({
  previewListContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: theme.colors.lighterGrey,
  },
  listContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: theme.colors.lighterGrey,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontFamily: theme.fonts.regular,
    fontSize: 20,
  },
});
