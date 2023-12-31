import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {GlobalStyles} from '../../constants/Style'

export default function Input({label, style, inputProps, onInputChangeHandler, value, isValid}) {
  return (
    <View style={styles.inputContainer}>
        <Text style={[styles.label, !isValid && {color: '#ff9999'}]}>{label}</Text>
        <TextInput value={value} style={[style, styles.input, !isValid && styles.inValid]} numberOfLines={1} {...inputProps} placeholderTextColor={GlobalStyles.colors.secondaryColor400} onChangeText={onInputChangeHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
      marginVertical: 8,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: GlobalStyles.colors.primaryColor
    },
    input: {
        backgroundColor: GlobalStyles.colors.secondaryColor,
        padding: 8,
        color: 'white',
        borderRadius: 8
    },
    inValid: {
      backgroundColor: '#ff9999',
      color: '#ff9999'
    }
})