import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constans/styles";

export default function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View
          style={mode === "flat" ? [styles.button, styles.flat] : styles.button}
        >
          <Text
            style={
              mode === "flat"
                ? [styles.buttonText, styles.flatText]
                : styles.buttonText
            }
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    margin: 4,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    // fontSize: 16,
  },
  flatText: {
    color: GlobalStyles.colors.primary400,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
