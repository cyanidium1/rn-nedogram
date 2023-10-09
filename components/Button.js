import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
const Button = ({ text = "add some text", click }) => {
  return (
    <TouchableOpacity className="w-full rounded-full" onPress={click}>
      <LinearGradient
        colors={["#ffe329", "#ff005a"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className=" py-4 rounded-full"
      >
        <Text className="text-center text-white text-base">{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
