import "./config/ReactotronConfig";
import "./config/DevToolsConfig";

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Modulo2</Text>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7159c1",
    flex: 1
  }
});
