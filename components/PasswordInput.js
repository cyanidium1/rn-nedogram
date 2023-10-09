import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

const PasswordInput = ({ set }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (input) => {
    setInput(input);
    set(input);
  };
  return (
    <View className="relative my-2">
      <TextInput
        className="bg-yellow-300 w-full p-4 rounded-xl border-2 border-gray-400 outline"
        placeholder={"Password"}
        value={input}
        onChangeText={handleInputChange}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity
        className="absolute right-4 h-full flex flex-col justify-center"
        onPress={togglePasswordVisibility}
      >
        <Text className="text-slate-800">{showPassword ? "hide" : "show"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
