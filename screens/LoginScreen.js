import React from "react";
import { ImageBackground, TouchableWithoutFeedback } from "react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import bg from "../images/deloreanGIF.gif";
import { Image } from "react-native";
import OtherInput from "../components/OtherInput";
import { LinearGradient } from "expo-linear-gradient";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import Link from "../components/Link";
import { useState } from "react";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    if (!email || !password) {
      return alert("Please input all data");
    }
    const data = {
      type: "login",
      email,
      password,
    };
    console.log(data);
    navigation.navigate("Home");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 bg-retro-purple">
        <Image source={bg} className="w-full h-1/2"></Image>
        <LinearGradient
          colors={["rgba(2,0,36,1)", "rgba(255,0,254,1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          className="w-full absolute bottom-0 flex items-center rounded-t-3xl p-4"
        >
          <Text className="text-3xl text-retro-yellow font-medium mb-6 mt-8">
            Login
          </Text>
          <View className="w-full mb-11">
            <OtherInput text={"E-mail"} set={setEmail} />
            <PasswordInput set={setPassword} />
          </View>
          <Button text={"Login"} click={onSubmit} />
          <Link type="reg" />
        </LinearGradient>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
