import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    backgroundColor: "#262626",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
  },

  checkbox: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    flex: 1,
    color: "#F2F2F2",
    padding: 8,
    textAlign: "left",
  },

  button: {
    width: 52,
    height: 52,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 4,
  },
});
