import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyle } from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CustomButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyle.colors.accentColor,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  text: {
    color: GlobalStyle.colors.textColor,
    marginLeft: 4,
    fontSize: 18,
    fontWeight: "bold",
  },
  innerContainer: {
    flexDirection: "row",
  },
  pressed: {
    opacity: 0.5,
  },
});
