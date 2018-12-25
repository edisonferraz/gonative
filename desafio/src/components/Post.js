import React from "react";
import PropTypes from "prop-types";

import { View, Text, StyleSheet } from "react-native";

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.author}>{post.author}</Text>
      <Text style={styles.description}>{post.description}</Text>
    </View>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 4,
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20
  },

  title: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold"
  },

  author: {
    color: "#999",
    fontSize: 12,
    marginBottom: 10
  },

  description: {
    color: "#999",
    fontSize: 14
  }
});
