import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  static defaultProps = {
    backButton: true,
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    backButton: PropTypes.bool,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.navigate('Repositories');
  };

  render() {
    const { title, backButton } = this.props;

    return (
      <View style={styles.container}>
        {backButton && (
          <TouchableOpacity onPress={this.goBack}>
            <Icon name="chevron-left" size={16} style={styles.icon} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

export default withNavigation(Header);
