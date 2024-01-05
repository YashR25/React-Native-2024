import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Icon({ name, onPress, size, color }) {
  return (
    <View style={styles.iconContainer}>
      <Ionicons name={name} onPress={onPress} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {},
});
