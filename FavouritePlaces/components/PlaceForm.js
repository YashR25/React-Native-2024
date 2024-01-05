import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useCallback, useState } from "react";
import ImagePicker from "./image/ImagePicker";
import LocationPicker from "./location/LocationPicker";
import { GlobalStyle } from "../constants/Colors";
import CustomButton from "./CustomButton";
import { Place } from "../util/Place";

export default function PlaceForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [imageUri, setImageUri] = useState();
  const [pickedLocation, setPickedLocation] = useState();
  const [placeData, setPlaceData] = useState();

  const onPickedLocationHandler = useCallback(({ lat, lng }) => {
    setPickedLocation({ lat: lat, lng: lng });
  }, []);

  const onPickImageHandler = (imageUri) => {
    setImageUri(imageUri);
  };

  const onPlaceSubmitHandler = () => {
    if (pickedLocation && imageUri && title) {
      const place = new Place(title, imageUri, pickedLocation);
      setPlaceData(place);
      onSubmit(place);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Title</Text>
          <TextInput
            value={title}
            style={styles.textInput}
            placeholder="Add title here"
            placeholderTextColor={GlobalStyle.colors.primary200}
            onChangeText={setTitle}
          />
        </View>
        <ImagePicker onPickImage={onPickImageHandler} />
        <LocationPicker onPickedLocation={onPickedLocationHandler} />
        <CustomButton onPress={onPlaceSubmitHandler}>Add Place</CustomButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 24,
  },
  inputContainer: {
    marginVertical: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: GlobalStyle.colors.textColor,
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: GlobalStyle.colors.primary400,
    padding: 8,
    borderRadius: 8,
    color: GlobalStyle.colors.textColor,
  },
});
