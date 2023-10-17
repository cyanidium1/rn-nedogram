import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { FlatList, Touchable, TouchableOpacity } from "react-native";
import comments from "../db/comments.json";
import Comment from "../components/Comment";
import { Image } from "react-native";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";

const CommentsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { image } = route.params;
  const [input, setInput] = useState("");
  const handleInputChange = (input) => {
    setInput(input);
  };
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <LinearGradient
      colors={["rgba(2,0,36,1)", "rgba(255,0,254,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <View className="flex items-center mt-8 relative">
        <TouchableOpacity
          className="absolute left-2"
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Icon name="arrow-back" size={30} color="#1E3A8A" />
        </TouchableOpacity>
        <Text className="text-[#1E3A8A] text-2xl font-semibold">Comments</Text>
      </View>
      <View className="p-4 mt-4">
        <Image source={{ uri: image }} className="w-full h-64 rounded-xl" />
      </View>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Comment comment={item} />}
      />
      <View className="relative my-2 px-4">
        <TextInput
          className="bg-yellow-300 w-full p-4 rounded-full border-2 border-gray-400 outline"
          placeholder={"Write smth"}
          value={input}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity
          className="absolute right-5 h-full flex flex-col justify-center"
          onPress={() => console.log(input)}
        >
          <Icon name="arrow-circle-up" size={55} color={"#1E3A8A"} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
    // </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;
