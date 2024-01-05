import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import Icon from "../components/Icon";
import { GlobalStyle } from "../constants/Colors";

export default function Map({ navigation, route }) {
  const initialLocation = route.params && {
    lat: parseFloat(route.params.lat),
    lng: parseFloat(route.params.lng),
  };

  const [pickedLocation, setPickedLocation] = useState(initialLocation);

  const onMapPressHandler = (event) => {
    if (initialLocation) {
      return;
    }
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setPickedLocation({
      lat: lat,
      lng: lng,
    });
  };

  const region = {
    latitude: initialLocation ? initialLocation.lat : 37.78,
    longitude: initialLocation ? initialLocation.lng : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onSaveHandler = useCallback(() => {
    if (!pickedLocation) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location (by taping on a map) first!"
      );
      return;
    }
    navigation.navigate("AddPlace", {
      pickedLat: pickedLocation.lat,
      pickedLng: pickedLocation.lng,
    });
  }, [pickedLocation, navigation]);

  useLayoutEffect(() => {
    if (initialLocation) {
      return;
    }
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name={"save"}
          color={GlobalStyle.colors.textColor}
          size={24}
          onPress={onSaveHandler}
        />
      ),
    });
  }, [navigation, onSaveHandler, initialLocation]);

  return (
    <MapView style={styles.mapView} onPress={onMapPressHandler} region={region}>
      {pickedLocation && (
        <Marker
          coordinate={{
            latitude: pickedLocation.lat,
            longitude: pickedLocation.lng,
          }}
          title="Marker"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});
