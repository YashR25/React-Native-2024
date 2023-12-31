import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MealScreen({route}) {
    const id = route.params.categoryId;
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})