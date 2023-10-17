

import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialIcons";

const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 p-10 pb-20 bg-slate-500">
      <Text className="text-2xl font-semibold text-center mb-4">
        View on map
      </Text>
      <TouchableOpacity
        className="absolute left-8 top-10"
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Icon name="arrow-back" size={30} color="#1E3A8A" />
      </TouchableOpacity>
      <MapView
        className="w-full h-full mx-auto"
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
      >
        <Marker
          title="I am here"
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          description="Hello"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
