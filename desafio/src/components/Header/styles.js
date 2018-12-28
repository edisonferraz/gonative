import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 54 + getStatusBarHeight(true),
    paddingTop: getStatusBarHeight(true),
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    paddingHorizontal: metrics.basePadding,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
    textAlign: 'center',
  },

  icon: {
    color: colors.darker,
  },
});

export default styles;
