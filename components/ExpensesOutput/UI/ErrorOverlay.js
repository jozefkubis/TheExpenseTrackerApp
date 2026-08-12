import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constans/styles";

export default function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    // color: GlobalStyles.colors.primary50,
  },
  text: {
    color: GlobalStyles.colors.primary50,
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: GlobalStyles.colors.primary50,
  },
  message: {
    fontSize: 14,
    color: GlobalStyles.colors.primary50,
    textAlign: "center",
    marginBottom: 16,
  },
});
