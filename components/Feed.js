import React from "react";
import { Text } from "react-native";
import { FlatList } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Feed = ({ posts }) => {
  const renderPostItem = ({ item }) => (
    <View className="m-2 p-2 rounded-xl bg-blue-400">
      <Image
        source={{ uri: item.imageLink }}
        className="w-full h-64 rounded-xl"
      />
      <Text className="text-lg text-purple-900 font-bold">{item.name}</Text>
      <View className="flex flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Icon name="comment" color={"#1E3A8A"} size={20} />
          <Text> 3</Text>
        </View>
        <View className="flex-row items-center">
          <Icon name="location-pin" size={20} color="#1E3A8A" />
          <Text className="text-gray-500">{item.location}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <FlatList
      data={posts}
      renderItem={renderPostItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Feed;
