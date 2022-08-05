import { View, Text } from "react-native";

import { styles } from "./styles";

type Props = {
  title: string;
  item?: number;
  color: string;
};

export function TaskInfo({ title, item, color }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: `${color}` }]}>{title}</Text>
      {item ? <Text style={styles.item}>{item}</Text> : undefined}
    </View>
  );
}
