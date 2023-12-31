import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../constants/Style'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Icon({name, color, size, onpress}) {
  return (
    <Pressable onPress={onpress}>
      <Ionicons name={name} size={size} color={color}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({})