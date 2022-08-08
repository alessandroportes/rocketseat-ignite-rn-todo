import React, { useEffect, useState } from "react";
import { View, Image, Text, FlatList, Alert, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import uuid from "react-native-uuid";

import Logo from "../../assets/Logo.png";
import Clipboard from "../../assets/Clipboard.png";

import { styles } from "./styles";
import { TaskInfo } from "../../components/TaskInfo";
import { Task } from "../../components/Task";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";

interface TaskData {
  id: string;
  title: string;
  isComplete: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [totalTask, setTotalTask] = useState(0);
  const [totalTaskCompleted, setTotalTaskCompleted] = useState(0);

  function handleTaskAdd() {
    if (tasks.find((item) => item.title === taskTitle)) {
      return Alert.alert(
        "Tarefa Existe",
        "Já existe uma tarefa com o mesmo nome"
      );
    }
    const data = {
      id: String(uuid.v4()),
      title: taskTitle,
      isComplete: false,
    };

    setTasks((prevState) => [...prevState, data]);
    setTaskTitle("");
    Keyboard.dismiss();
  }

  function handleTaskRemove(id: string) {
    Alert.alert("Remover", `Remover tarefa?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((item) => item.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleTaskOk(id: string) {
    setTasks((prevState) =>
      prevState.map((task: TaskData) => {
        if (task.id === id) {
          task.isComplete = !task.isComplete;
        }
        return task;
      })
    );
  }

  function listTotalTasks() {
    setTotalTask(tasks.filter((item) => item.isComplete === false).length);
  }

  function listTotalTasksCompleted() {
    setTotalTaskCompleted(
      tasks.filter((item) => item.isComplete === true).length
    );
  }

  useEffect(() => {
    listTotalTasks();
    listTotalTasksCompleted();
  }, [tasks]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.form}>
          <Input onChangeText={setTaskTitle} value={taskTitle} />
          <Button
            style={styles.button}
            underlayColor={"#4EA8DE"}
            onPress={handleTaskAdd}
          >
            <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
          </Button>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <TaskInfo title="Novas" item={totalTask} color="#4EA8DE" />
          <TaskInfo
            title="Concluídas"
            item={totalTaskCompleted}
            color="#8284FA"
          />
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              name={item.title}
              isComplete={item.isComplete}
              id={item.id}
              onRemove={() => handleTaskRemove(item.id)}
              onComplete={() => handleTaskOk(item.id)}
            />
          )}
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
