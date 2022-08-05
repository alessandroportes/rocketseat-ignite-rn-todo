import React, { useState } from "react";
import { TextInput } from "react-native";

import { styles } from "./styles";

export function Input() {
  const [isFocus, setIsFocus] = useState(false);

  function handleFocus() {
    setIsFocus(true);
  }

  function handleBlur() {
    setIsFocus(false);
  }

  return (
    <TextInput
      style={[
        styles.input,
        {
          borderColor: isFocus ? "#5E60CE" : "#0D0D0D",
          borderWidth: 1,
        },
      ]}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#808080"
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}
