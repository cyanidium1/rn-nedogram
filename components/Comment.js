import React from "react";
import { Text } from "react-native";
import { View } from "react-native";

const Comment = ({ comment }) => (
  <View style={styles.comment}>
    <Text style={styles.author}>{comment.author}</Text>
    <Text style={styles.date}>{comment.date}</Text>
    <Text style={styles.text}>{comment.text}</Text>
  </View>
);

export default Comment;
