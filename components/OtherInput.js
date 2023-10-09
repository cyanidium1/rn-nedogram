import React, { useState } from "react";
import { TextInput } from "react-native";

const OtherInput = ({ text = "forgot to add props", set }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (input) => {
    setInput(input);
    set(input);
  };

  return (
    <TextInput
      className="bg-yellow-300 w-full p-4 rounded-xl border-2 border-gray-400 outline my-2"
      placeholder={text}
      value={input}
      onChangeText={handleInputChange}
      // keyboardType={keyboardType}
    />
  );
};

export default OtherInput;
