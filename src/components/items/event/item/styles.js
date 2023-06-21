import { StyleSheet } from 'react-native';

import { theme } from '../../../../constants';

export const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
  },
  previewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    height: 90,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerTitle: { fontSize: 18, fontFamily: theme.fonts.bold, color: theme.colors.primary },
  orderType: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text,
  },
  footerContainer: {
    flexWrap: 'nowrap',
  },
  text: {
    fontSize: 15,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text,
  },
  detailContainer: {
    backgroundColor: theme.colors.lighterGrey,
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
  },
  description: {
    fontSize: 15,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
  manageEvent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
  },
});
