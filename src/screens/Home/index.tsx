import React, { useState } from "react";
import { View, Image, Text, TextInput, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Logo from "../../assets/Logo.png";
import Clipboard from "../../assets/Clipboard.png";

import { styles } from "./styles";
import { TaskInfo } from "../../components/TaskInfo";
import { Task } from "../../components/Task";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";

export function Home() {
  const [isFocus, setIsFocus] = useState(false);
  const [task, setTask] = useState<string[]>([]);

  function handleTaskAdd() {}

  function handleTaskRemove() {}

  function handleTaskOk() {}

  const tasks = [
    "Lorem ipsum dolor sit am et cons e ctetur adipisicing elitvv vvvvv vvvv vv vv vvv vvvvvv",
    "tarefa",
    "tarefa2",
    "tarefa2",
    "tarefa2",
    "tarefa2",
    "tarefa2",
    "tarefa2",
    "tarefa2",
    "tarefa2",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.form}>
          <Input />
          <Button
            style={styles.button}
            underlayColor={"#4EA8DE"}
            onPress={() => console.log("click")}
          >
            <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
          </Button>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <TaskInfo title="Novas" item={1} color="#4EA8DE" />
          <TaskInfo title="Concluídas" item={20} color="#8284FA" />
        </View>

        <FlatList
          data={tasks}
          renderItem={({ item }) => <Task title={item} checked={false} />}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmptyContainer}>
              <Image
                source={Clipboard}
                style={{ width: 56, height: 56, marginBottom: 16 }}
              />
              <Text style={[styles.listEmptyText, { fontWeight: "bold" }]}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
