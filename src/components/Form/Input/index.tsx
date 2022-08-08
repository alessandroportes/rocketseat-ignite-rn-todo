import React, { useState } from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

interface Props extends TextInputProps {}

export function Input({ ...rest }: Props) {
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
          color: isFocus ? "#F2F2F2" : "#808080",
        },
      ]}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={isFocus ? "#F2F2F2" : "#808080"}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    />
  );
}
