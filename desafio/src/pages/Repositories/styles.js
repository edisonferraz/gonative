import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  form: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    margin: metrics.basePadding,
    marginBottom: metrics.basePadding / 2,
    paddingBottom: metrics.basePadding,
    flexDirection: 'row',
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: 20,
    flex: 1,
  },

  button: {
    backgroundColor: colors.secondary,
    borderRadius: metrics.baseRadius,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonIcon: {
    color: colors.white,
  },
});

export default styles;
