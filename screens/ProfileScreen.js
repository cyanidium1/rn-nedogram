import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "react-native";

const ProfileScreen = () => {
  return (
    <LinearGradient
      colors={["rgba(0,48,255,1)", "rgba(2,0,36,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="h-full"
    >
      <Text className="text-2xl font-bold tracking-widest text-center text-retro-pink mt-4">
        Profile
      </Text>
    </LinearGradient>
  );
};

export default ProfileScreen;
