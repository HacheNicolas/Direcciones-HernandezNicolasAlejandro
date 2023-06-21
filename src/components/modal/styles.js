import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.lighterGrey,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 30,
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
    marginBottom: 10,
  },
  detailContainer: {
    paddingVertical: 20,
  },
  detailMessage: {
    fontSize: 18,
    color: theme.colors.black,
  },
  selectedItem: {
    fontSize: 18,
    color: theme.colors.black,
    fontFamily: theme.fonts.bold,
    marginTop: 10,
    paddingVertical: 10,
    textAlign: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 10,
  },
  buttonContainer: {
    width: '70%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
