import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: repository.avatar }} />
    <View style={styles.info}>
      <Text style={styles.name}>{repository.name}</Text>
      <Text style={styles.organization}>{repository.organization}</Text>
    </View>
    <Icon name="chevron-right" size={12} style={styles.icon} />
  </View>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    organization: PropTypes.string,
  }).isRequired,
};

export default RepositoryItem;
