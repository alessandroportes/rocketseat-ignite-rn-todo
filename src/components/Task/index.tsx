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
  isComplete?: boolean;
  onRemove: () => void;
  onComplete: () => void;
};

export function Task({
  id = String(uuid.v4()),
  name,
  isComplete = false,
  onRemove,
  onComplete,
}: Props) {
  return (
    <View style={styles.form}>
      <Checkbox
        style={styles.checkbox}
        value={isComplete}
        onValueChange={onComplete}
      />
      <Text
        style={[
          styles.text,
          {
            textDecorationLine: isComplete ? "line-through" : "none",
            color: isComplete ? "#808080" : "#F2F2F2",
          },
        ]}
      >
        {name}
      </Text>
      <Button
        style={styles.button}
        underlayColor={"#333333"}
        onPress={onRemove}
      >
        <Ionicons name="trash-outline" size={20} color="#808080" />
      </Button>
    </View>
  );
}
