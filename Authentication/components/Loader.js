import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Loader({color}) {
  return (
    <ActivityIndicator color={color}/>
  )
}

const styles = StyleSheet.create({})