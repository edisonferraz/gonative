import "./config/ReactotronConfig";
import "./config/DevToolsConfig";

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Routes from "./routes";

class App extends Component {
  render() {
    return <Routes />;
  }
}

export default App;

const styles = StyleSheet.create({});
