import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const LogOut = ({
  click = () => {
    console.log("add func");
  },
}) => {
  return (
    <TouchableOpacity className="px-2" onPress={click}>
      <Icon name="logout" color="#ffe329" size={30} />
    </TouchableOpacity>
  );
};

export default LogOut;
