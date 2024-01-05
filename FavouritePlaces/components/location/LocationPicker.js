import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import OutlinedButton from "../OutlinedButton";
import { GlobalStyle } from "../../constants/Colors";
import {
  useForegroundPermissions,
  PermissionStatus,
  getCurrentPositionAsync,
} from "expo-location";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

export default function LocationPicker({ onPickedLocation }) {
  const [locationStatus, requestPermission] = useForegroundPermissions();
  const [location, setLocation] = useState();
  const navigator = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      const lat = route.params.pickedLat;
      const lng = route.params.pickedLng;

      setLocation({ lat: lat, lng: lng });
    }
  }, [isFocused, route.params]);

  const verifyPermission = async () => {
    if (locationStatus.status === PermissionStatus.UNDETERMINED) {
      const permissionStatus = await requestPermission();
      return permissionStatus.granted;
    }

    if (locationStatus.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permission Denied!",
        "The app need location permission to locate the place."
      );
      return false;
    }
    return true;
  };

  const pickLocationHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    try {
      const response = await getCurrentPositionAsync();
      if (response) {
        setLocation({
          lat: response.coords.latitude,
          lng: response.coords.longitude,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (location) {
      onPickedLocation(location);
    }
  }, [location, onPickedLocation]);

  const onMapNavigateHandler = () => {
    navigator.navigate("MapScreen");
  };

  let LocationElement = <Text style={styles.text}>No image choosen yet.</Text>;

  if (location) {
    LocationElement = <Text style={styles.text}>{location.lat}</Text>;
  }

  useEffect(() => {}, [location]);
  return (
    <View style={styles.container}>
      <View style={styles.locationPreview}>{LocationElement}</View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <OutlinedButton
            onPress={pickLocationHandler}
            icon={"location-outline"}
          >
            Locate
          </OutlinedButton>
        </View>
        <View style={styles.button}>
          <OutlinedButton onPress={onMapNavigateHandler} icon={"map"}>
            Locate on map
          </OutlinedButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  locationPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    backgroundColor: GlobalStyle.colors.primary400,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: GlobalStyle.colors.primary200,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    margin: 8,
  },
});
