import React, { useState } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { Button } from "../Form/Button";

type Props = {
  title: string;
  checked: boolean;
};

export function Task({ title, checked }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.form}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setIsChecked}
      />
      <Text style={styles.text}>{title}</Text>
      <Button
        style={styles.button}
        underlayColor={"#333333"}
        onPress={() => console.log("Click TRASH")}
      >
        <Ionicons name="trash-outline" size={20} color="#808080" />
      </Button>
    </View>
  );
}
