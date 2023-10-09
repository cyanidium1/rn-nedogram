import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
const Link = ({ type }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="mt-4"
      onPress={() => {
        type === "reg"
          ? navigation.navigate("RegistrationScreen")
          : navigation.navigate("LoginScreen");
      }}
    >
      <Text className="text-base text-yellow-300">
        {type === "reg"
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;
