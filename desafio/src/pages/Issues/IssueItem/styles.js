import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding / 2,
    marginHorizontal: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  info: {
    flex: 1,
  },

  avatar: {
    borderRadius: 40,
    height: 40,
    width: 40,
    marginRight: metrics.baseMargin,
  },

  title: {
    color: colors.darker,
    fontSize: 14,
    fontWeight: 'bold',
  },

  author: {
    color: colors.regular,
    fontSize: 11,
  },

  icon: {
    marginLeft: 5,
    color: colors.light,
  },
});

export default styles;
