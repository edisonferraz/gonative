import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  wrapfilters: {
    margin: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
    flexDirection: 'row',
  },

  buttonAll: {
    backgroundColor: colors.light,
    borderTopLeftRadius: metrics.baseMargin,
    borderBottomLeftRadius: metrics.baseMargin,
    paddingVertical: 4,
    flex: 1,
  },

  buttonOpen: {
    backgroundColor: colors.light,
    paddingVertical: 4,
    flex: 1,
  },

  buttonClose: {
    backgroundColor: colors.light,
    borderTopRightRadius: metrics.baseMargin,
    borderBottomRightRadius: metrics.baseMargin,
    paddingVertical: 4,
    flex: 1,
  },

  buttonSelected: {
    color: colors.darker,
    fontWeight: 'bold',
  },

  buttonText: {
    color: colors.dark,
    textAlign: 'center',
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },

  emptyContainer: {
    margin: metrics.baseMargin * 2,
    textAlign: 'center',
  },
});

export default styles;
