import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Card({children}) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3b021f',
        borderRadius: 8,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24
    }
})