import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },

  header: {
    height: 173,
    width: "100%",
    backgroundColor: "#0D0D0D",
    alignItems: "center",
  },

  logo: {
    width: 110,
    height: 32,
    marginTop: 70,
  },

  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 142,
    position: "absolute",
  },

  input: {
    height: 54,
    width: 271,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#262626",
    color: "#808080",
    borderRadius: 6,
    fontSize: 16,
    padding: 16,
  },

  button: {
    width: 52,
    height: 52,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 4,
  },

  content: {
    flex: 1,
    margin: 24,
    marginTop: 48,
  },

  contentHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },

  listEmptyContainer: {
    flex: 1,
    height: 208,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderColor: "#808080",
  },

  listEmptyText: {
    fontSize: 14,
    color: "#808080",
    textAlign: "center",
  },
});
