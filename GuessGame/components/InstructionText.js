import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

export default function InstructionText({children}) {
  return (
    <View style={styles.instructionContainer}>
      <Text style={styles.instruction}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    instructionContainer: {
        marginVertical: 15
    },
    instruction: {
        fontSize: 24,
        color: Colors.accent500,
        fontWeight: 'bold'
      },
})