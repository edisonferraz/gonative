import React, { Component } from 'react';
import api from '~/services/api';
import {
  View,
  TextInput,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';
import RepositoryItem from './RepositoryItem';

import styles from './styles';

export default class Repositories extends Component {
  state = {
    repositoryName: 'rocketseat/comunidade',
    repositories: [],
    loading: false,
    refreshing: false,
  };

  componentDidMount() {
    this.getRepositoriesAsyncStorage();
  }

  getRepositoriesAsyncStorage = async () => {
    // await AsyncStorage.clear();
    const repositories = await AsyncStorage.getItem('@Repositories');
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  };

  addRepository = async () => {
    const { repositoryName, repositories } = this.state;

    this.setState({ loading: true });

    const { data } = await api.get(`/repos/${repositoryName}`);

    const newRepository = {
      id: data.id,
      name: data.name,
      organization: data.organization.login,
      avatar: data.organization.avatar_url,
    };

    this.setState(
      { repositories: [...repositories, newRepository], repositoryName: '', loading: false },
      async () => {
        const { repositories: repos } = this.state;
        await AsyncStorage.setItem('@Repositories', JSON.stringify(repos));
      },
    );
  };

  loadRepositories = () => {
    this.setState({ refreshing: true });
    this.getRepositoriesAsyncStorage();
    this.setState({ refreshing: false });
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  render() {
    const {
      repositoryName, loading, repositories, refreshing,
    } = this.state;

    return (
      <View style={styles.container}>
        <Header title="GitIssues" backButton={false} />

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="transparent"
            value={repositoryName}
            onChangeText={text => this.setState({ repositoryName: text })}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this.addRepository}
            disabled={!repositoryName}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="plus" size={16} style={styles.buttonIcon} />
            )}
          </TouchableOpacity>
        </View>

        <FlatList
          data={repositories}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          onRefresh={this.loadRepositories}
          refreshing={refreshing}
        />
      </View>
    );
  }
}
