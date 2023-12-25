import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GoalItem(props) {
  return (
        <View style={styles.goal} key={props.goal.id}>
            <Pressable android_ripple={{color: '#dddddd'}} onPress={() => props.onDelete(props.goal.id)}>
                <Text style={styles.goalText}>{props.goal.text}</Text>
            </Pressable>
        </View>
  )
}

const styles = StyleSheet.create({
    goal: {
        color: '#FFFFFF',
        borderRadius: 5,
        backgroundColor: 'blue',
        marginVertical: 5
      },
    goalText: {
        color: '#FFFFFF',
        padding: 8
    }
})