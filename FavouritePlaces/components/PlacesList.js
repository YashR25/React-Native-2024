import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";

export default function PlacesList({ places }) {
  return (
    <View>
      <FlatList
        data={places}
        renderItem={({ index, item }) => <PlaceItem place={item} />}
        keyExtractor={(place) => place.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
