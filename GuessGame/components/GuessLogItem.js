import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GuessLogItem({itemIndex, guess}) {
  return (
    <View>
      <Text>{guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})