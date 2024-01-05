import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getPlace } from "../database/Database";
import CustomButton from "../components/CustomButton";

export default function PlaceDetail({ navigation, route }) {
  const [place, setPlace] = useState();

  useEffect(() => {
    if (route.params) {
      getPlace(route.params.id).then((result) => {
        setPlace(result.rows._array[0]);
      });
    }
  }, [route.params]);

  const onPressHandler = () => {
    navigation.navigate("MapScreen", {
      lat: place.latitude,
      lng: place.longitude,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: place?.imageUri }} style={styles.image} />
      </View>
      <Text style={styles.title}>{place?.title}</Text>
      <Text style={styles.text}>Lat: {place?.latitude}</Text>
      <Text style={styles.text}>Lng: {place?.longitude}</Text>
      <CustomButton onPress={onPressHandler}>Show on Map</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    marginTop: 18,
    fontWeight: "bold",
    fontSize: 32,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
