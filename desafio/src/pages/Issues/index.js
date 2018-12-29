import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';
import {
  View, Text, ActivityIndicator, FlatList, TouchableOpacity, Linking,
} from 'react-native';

import styles from './styles';

import Header from '~/components/Header';
import IssueItem from './IssueItem';

export default class Repositories extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    issues: [],
    filter: 'all',
    loading: false,
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    const { filter } = this.state;
    const { navigation } = this.props;
    const repositoryFullName = navigation.getParam('full_name');

    this.setState({ loading: true });

    const { data: issues } = await api.get(`/repos/${repositoryFullName}/issues?state=${filter}`);

    this.setState({ loading: false, issues });
  };

  setFilterIssues = (type) => {
    this.setState({ filter: type }, () => {
      this.loadIssues();
    });
  };

  renderListItem = ({ item }) => (
    <TouchableOpacity onPress={() => Linking.openURL(item.html_url)}>
      <IssueItem issue={item} />
    </TouchableOpacity>
  );

  render() {
    const { issues, loading, filter } = this.state;
    const { navigation } = this.props;
    const repositoryName = navigation.getParam('name');

    return (
      <View style={styles.container}>
        <Header title={repositoryName} />

        <View style={styles.wrapfilters}>
          <TouchableOpacity style={styles.buttonAll} onPress={() => this.setFilterIssues('all')}>
            <Text style={[styles.buttonText, filter === 'all' ? styles.buttonSelected : null]}>
              Todas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonOpen} onPress={() => this.setFilterIssues('open')}>
            <Text style={[styles.buttonText, filter === 'open' ? styles.buttonSelected : null]}>
              Abertas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => this.setFilterIssues('closed')}
          >
            <Text style={[styles.buttonText, filter === 'closed' ? styles.buttonSelected : null]}>
              Fechadas
            </Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          <FlatList
            data={issues}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderListItem}
            ListEmptyComponent={() => (
              <Text style={styles.emptyContainer}>Não existem issues abertas.</Text>
            )}
          />
        )}
      </View>
    );
  }
}
