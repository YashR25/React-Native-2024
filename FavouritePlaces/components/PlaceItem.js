import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyle } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

export default function PlaceItem({ place }) {
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate("PlaceDetail", { id: place.id });
  };
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPressHandler}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: place.imageUri }} style={styles.image} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.text}>Lat: {place.latitude}</Text>
        <Text style={styles.text}>Long: {place.longitude}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: GlobalStyle.colors.primary300,
    padding: 8,
    borderRadius: 12,
    elevation: 4,
    margin: 8,
  },
  imageContainer: {
    flex: 2,
    height: 100,
    borderRadius: 8,
    overflow: "hidden",
  },
  detailContainer: {
    flex: 4,
    marginLeft: 8,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    color: GlobalStyle.colors.textColor,
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    color: GlobalStyle.colors.textColor,
  },
  pressed: {
    opacity: 0.8,
  },
});
