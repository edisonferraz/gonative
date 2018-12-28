import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  info: {
    flex: 1,
  },

  avatar: {
    height: 40,
    width: 40,
    marginRight: metrics.baseMargin,
  },

  name: {
    color: colors.darker,
    fontSize: 14,
    fontWeight: 'bold',
  },

  organization: {
    color: colors.regular,
    fontSize: 11,
  },

  icon: {
    color: colors.light,
  },
});

export default styles;
