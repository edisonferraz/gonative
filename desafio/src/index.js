import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';

import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {
  state = {
    teste: '',
  };

  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}
