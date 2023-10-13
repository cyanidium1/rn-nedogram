import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

const PostsScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["rgba(0,48,255,1)", "rgba(2,0,36,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="h-full"
      style={{ flex: 1, borderWidth: 0 }}
    >
      <Text className="text-2xl font-bold tracking-widest text-center text-retro-pink mt-4">
        Home
      </Text>
      <View className="w-3/5 m-auto mt-64">
        <TouchableOpacity
          className="bg-[#2a2a2a80] p-1 my-3 rounded-full items-center justify-center"
          onPress={() => {
            navigation.navigate("RegistrationScreen");
          }}
        >
          <Text className="text-retro-turquoise text-2xl">Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-[#2a2a2a80] p-1 my-3 rounded-full items-center justify-center"
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        >
          <Text className="text-retro-turquoise text-2xl">Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default PostsScreen;
