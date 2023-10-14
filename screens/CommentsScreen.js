import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList } from "react-native";
import { Text } from "react-native";

const CommentsScreen = () => {
  return (
    <LinearGradient
      colors={["rgba(2,0,36,1)", "rgba(255,0,254,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="relative h-36 rounded-t-xl rounded-tr-xl bg-black"
    >
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Comment comment={item} />}
      />
    </LinearGradient>
  );
};

export default CommentsScreen;
