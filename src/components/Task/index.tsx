import React, { useState } from "react";
import uuid from "react-native-uuid";
import { Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { Button } from "../Form/Button";

type Props = {
  id?: string;
  name: string;
  isComplete: boolean;
};

export function Task({ id = uuid.v4(), name, isComplete }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.form}>
      <Checkbox
        style={styles.checkbox}
        value={isComplete}
        onValueChange={setIsChecked}
      />
      <Text style={styles.text}>{name}</Text>
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
