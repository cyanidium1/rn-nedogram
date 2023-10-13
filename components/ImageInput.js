import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, ImageBackground } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome5";

const ImageInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access media library denied");
      }
    })();
  }, []);

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled && result.assets.length > 0) {
      const selectedImage = result.assets[0].uri;
      setSelectedImage(selectedImage);
    }
  };

  return (
    <>
      <ImageBackground
        className="bg-blue-400 rounded-xl w-full h-56 cover relative overflow-hidden"
        source={selectedImage ? { uri: selectedImage } : null}
      >
        <View className="flex-1 w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <TouchableOpacity
            onPress={handleImagePick}
            className="rounded-full p-4 bg-blue-400 opacity-60"
          >
            <Icon name="camera" size={30} color="#1E3A8A" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <TouchableOpacity onPress={handleImagePick}>
        <Text className="text-blue-400 mt-2">
          {selectedImage ? "Edit image" : "Upload image"}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default ImageInput;
