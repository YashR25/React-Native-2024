import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyle } from "../constants/Colors";
import { getAllPlaces } from "../database/Database";
import PlacesList from "../components/PlacesList";
import { useIsFocused } from "@react-navigation/native";

export default function AllPlaces() {
  const [places, setPlaces] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    getAllPlaces().then((result) => {
      if (result.rows._array.length > 0) {
        setPlaces(result.rows._array);
      }
    });
  }, [isFocused]);

  if (!places) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.text}>No places added yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <PlacesList places={places} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontWeight: "bold",
    color: GlobalStyle.colors.textColor,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
