import "./config/ReactotronConfig";
import "./config/DevToolsConfig";

import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Post from "./components/Post";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Aprendendo React Native",
        author: "Edison Ferraz",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque excepturi sed nulla, obcaecati voluptatibus, doloremque rerum impedit, doloribus adipisci accusamus fuga sequi iusto repellat atque modi tenetur cum aut?"
      },
      {
        id: 2,
        title: "Aprendendo React Native",
        author: "Edison Ferraz",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque excepturi sed nulla, obcaecati voluptatibus, doloremque rerum impedit, doloribus adipisci accusamus fuga sequi iusto repellat atque modi tenetur cum aut?"
      },
      {
        id: 3,
        title: "Aprendendo React Native",
        author: "Edison Ferraz",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque excepturi sed nulla, obcaecati voluptatibus, doloremque rerum impedit, doloribus adipisci accusamus fuga sequi iusto repellat atque modi tenetur cum aut?"
      },
      {
        id: 4,
        title: "Aprendendo React Native",
        author: "Edison Ferraz",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cumque excepturi sed nulla, obcaecati voluptatibus, doloremque rerum impedit, doloribus adipisci accusamus fuga sequi iusto repellat atque modi tenetur cum aut?"
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>

        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7159c1",
    flex: 1
  },

  header: {
    backgroundColor: "#fff",
    color: "#333",
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },

  headerTitle: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold"
  }
});
