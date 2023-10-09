import React from "react";
import avatar from "../images/avatar.jpg";
import { Image, Text, TouchableOpacity, View } from "react-native";
const Avatar = () => {
  return (
    <View className="absolute w-full flex items-center">
      <Image
        source={avatar}
        className="w-28 h-28 absolute -top-14 rounded-lg"
      />
      <TouchableOpacity className="rounded-full absolute border-2 border-retro-yellow w-8 h-8 left-[220px] top-2 flex items-center">
        <Text className="text-retro-yellow text-2xl absolute -top-[3px]">
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;
