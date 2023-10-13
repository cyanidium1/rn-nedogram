import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PasswordInput from "../components/PasswordInput";
import OtherInput from "../components/OtherInput";
import Button from "../components/Button";
import Link from "../components/Link";
import bg from "../images/deloreanGIF.gif";
import Avatar from "../components/Avatar";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    if (!login || !email || !password) {
      return alert("Please input all data");
    }
    const data = {
      type: "register",
      login,
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
          <Avatar />
          <Text className="text-3xl text-retro-yellow font-medium mb-6 mt-20">
            Register
          </Text>
          <View className="w-full mb-11">
            <OtherInput text={"Login"} set={setLogin} />
            <OtherInput text={"E-mail"} set={setEmail} />
            <PasswordInput set={setPassword} />
          </View>
          <Button text={"Register"} click={onSubmit} />
          <Link type="log" />
        </LinearGradient>
        <View className="w-full absolute bottom-0 flex items-center"></View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
