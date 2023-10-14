import React from "react";
import { Text, View } from "react-native";
import Avatar from "./Avatar";
import { LinearGradient } from "expo-linear-gradient";

const TopHeaderComponentProfile = () => {
  return (
    <View className="h-[500px] flex justify-end">
      <LinearGradient
        colors={["rgba(2,0,36,1)", "rgba(255,0,254,1)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="relative h-36 rounded-t-xl rounded-tr-xl bg-black"
      >
        <Avatar />
        <View className="absolute bottom-6 w-full">
          <Text className="text-center text-3xl font-semibold text-red-300">
            King's Gambit
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default TopHeaderComponentProfile;
