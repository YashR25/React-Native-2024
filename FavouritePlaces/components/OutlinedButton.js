import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyle } from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function OutlinedButton({ children, onPress, icon }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.innerContainer}>
        <Ionicons name={icon} size={18} color={GlobalStyle.colors.textColor} />
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: GlobalStyle.colors.textColor,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    marginVertical: 8,
  },
  text: {
    color: GlobalStyle.colors.textColor,
    marginLeft: 4,
  },
  innerContainer: {
    flexDirection: "row",
  },
  pressed: {
    opacity: 0.5,
  },
});
