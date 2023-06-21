import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  preview: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 1,
    marginBottom: 10,
  },
  actions: {
    paddingVertical: 10,
  },
});
