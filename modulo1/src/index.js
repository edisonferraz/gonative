import "./config/ReactotronConfig";

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import Todo from "~/components/Todo";

export default class App extends Component {
  state = {
    todos: [
      { id: 0, text: "fazer cafe www2" },
      { id: 1, text: "estudar gonative" }
    ]
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "estudar js" }]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="adicionar todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
