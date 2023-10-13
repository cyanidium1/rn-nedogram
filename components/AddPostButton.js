import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const AddPostButton = () => {
  return (
    <View className="px-6 rounded-3xl bg-blue-400 h-12 py-2">
      <Icon name="plus" size={30} color={"white"} />
    </View>
  );
};

export default AddPostButton;
