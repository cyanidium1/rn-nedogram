import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";
// import bg from "../images/deloreanGIF.gif";
import bg from "../images/delorean.jpg";
import Avatar from "../components/Avatar";
import { View } from "react-native";
import posts from "../db/posts.json";
import Feed from "../components/Feed";
import { ImageBackground } from "react-native";
const ProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#FF00FE]">
      <ImageBackground source={bg} className="w-full h-full bg-contain">
        {/* <LinearGradient
        colors={["rgba(2,0,36,1)", "rgba(255,0,254,1)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="w-full absolute bottom-80 h-16 flex items-center rounded-t-3xl p-4 z-10 "
      >
        <Avatar />
      </LinearGradient> */}
        <Feed posts={posts} profile={true} />
        {/* <View className="w-full absolute bottom-0 flex items-center"></View> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProfileScreen;
