import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { GlobalStyle } from "../../constants/Colors";
import OutlinedButton from "../OutlinedButton";
import * as ExpoImagePicker from "expo-image-picker";

export default function ImagePicker({ onPickImage }) {
  const [permissionState, requestPermission] =
    ExpoImagePicker.useCameraPermissions();
  const [imageSource, setImageSource] = useState();

  const verifyPermission = async () => {
    console.log(permissionState.status);
    if (
      permissionState.status === ExpoImagePicker.PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    // if (permissionState.status === ExpoImagePicker.PermissionStatus.DENIED) {
    //   Alert.alert(
    //     "Permission Denied!",
    //     "The app need permission to take a photo of your place"
    //   );
    //   return false;
    // }

    return true;
  };
  const pickImageHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    try {
      const response = await ExpoImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });
      if (response.assets) {
        setImageSource(response.assets[0].uri);
        onPickImage(response.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  let PlaceImage = <Text style={styles.text}>No image choosen yet.</Text>;
  if (imageSource) {
    PlaceImage = <Image source={{ uri: imageSource }} style={styles.image} />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.imagePreview}>{PlaceImage}</View>
      <OutlinedButton onPress={pickImageHandler}>Pick An Image</OutlinedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    backgroundColor: GlobalStyle.colors.primary400,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  text: {
    color: GlobalStyle.colors.primary200,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
