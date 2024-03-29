import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title({children}) {
  return (
    <Text style={styles.title}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        padding: 8,
        color: 'white'
    }
})