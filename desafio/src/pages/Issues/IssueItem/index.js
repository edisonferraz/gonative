import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const IssueItem = ({ issue }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
    <View style={styles.info}>
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
        {issue.title}
      </Text>
      <Text style={styles.author}>{issue.user.login}</Text>
    </View>
    <Icon name="chevron-right" size={12} style={styles.icon} />
  </View>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    avatar: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }).isRequired,
    title: PropTypes.string,
  }).isRequired,
};

export default IssueItem;
