import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

export default function Button({children, onpress}) {
  return (
    <Pressable style={styles.container} android_ripple={{color: Colors.primary700}} onPress={onpress}>
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: Colors.primary600,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})