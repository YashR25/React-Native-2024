import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../constants/Style'
import Loader from './Loader'

export default function CustomButton({text, buttonStyle, textStyle, onPress, showLoader}) {

  return (
   <View style={[styles.buttonContainer, buttonStyle]}>
    <Pressable style={styles.innerContainer} 
    android_ripple={{color: GlobalStyles.colors.secondaryColor}}
    onPress={onPress}>
        {!showLoader && <Text style={[styles.text, textStyle]}>{text}</Text>}
        {showLoader && <Loader color={GlobalStyles.colors.accentColor}/>}
    </Pressable>
   </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: GlobalStyles.colors.primaryColor,
        borderRadius: 8,
        marginVertical: 16,
        overflow: 'hidden'
    },
    innerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: GlobalStyles.colors.accentColor,
    }
})