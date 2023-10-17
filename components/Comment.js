import React from "react";
import { Text, View } from "react-native";
import avatar from "../images/avatar.jpg";
import { Image } from "react-native";

const Comment = ({ comment }) => {
  return (
    <View className="flex-row  m-4">
      <Image source={avatar} className="rounded-full w-12 h-12 mr-4" />
      <View className="p-4 bg-white rounded-lg shadow w-3/4">
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-semibold mb-2">{comment.author}</Text>
          <Text className="text-gray-500 mb-2">{comment.date}</Text>
        </View>
        <Text className="text-base">{comment.text}</Text>
      </View>
    </View>
  );
};

export default Comment;
