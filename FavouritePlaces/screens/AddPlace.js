import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceForm from "../components/PlaceForm";
import { insert } from "../database/Database";

export default function AddPlace({ navigation, route }) {
  const onSubmitHandler = ({ title, image, location }) => {
    insert({ title, image, location }).then((result) => {
      // console.log(result.rows._array[0]);
    });
    navigation.navigate("AllPlaces");
  };
  return <PlaceForm onSubmit={onSubmitHandler} />;
}
