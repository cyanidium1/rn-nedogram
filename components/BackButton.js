import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const BackButton = ({
  click = () => {
    console.log("no fn added");
  },
}) => {
  return (
    <TouchableOpacity className="px-2" onPress={click}>
      <Icon name="arrow-back" color="#ffe329" size={30} />
    </TouchableOpacity>
  );
};

export default BackButton;
