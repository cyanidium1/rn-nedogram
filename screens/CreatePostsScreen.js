import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Button from "../components/Button";
import { Keyboard } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Feather";
import ImageInput from "../components/ImageInput";

const CreatePostsScreen = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  const onSubmit = () => {
    console.log({ name, location });
  };

  const onDelete = () => {
    setLocation("");
    setName("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={["#FF00FE", "rgba(2,0,36,1)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="h-full px-4 py-8"
      >
        <ImageInput />
        <TextInput
          className="bg-blue-400 w-full p-4 rounded-xl outline my-2 mt-8"
          placeholder="Name..."
          value={name} // Bind value to name state
          onChangeText={handleNameChange}
        />
        <View className="my-2 mb-8 relative">
          <TextInput
            className="bg-blue-400 w-full p-4 pl-8 rounded-xl outline"
            placeholder="Location..."
            value={location}
            onChangeText={handleLocationChange}
          />
          <Icon
            name="location-pin"
            size={30}
            color="#1E3A8A"
            style={{ position: "absolute", top: 14 }}
          />
        </View>
        <Button text={"Post"} click={onSubmit} />
        <View className="flex-1 flex justify-end items-center">
          <TouchableOpacity
            onPress={onDelete}
            className="bg-blue-400 px-6 py-2 rounded-3xl"
          >
            <Icon2 name="trash-2" color="#ffe329" size={30} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
