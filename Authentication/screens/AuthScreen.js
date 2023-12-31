import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Authentication from '../components/Auth/Authentication'
import { GlobalStyles } from '../constants/Style'
import { LinearGradient } from 'expo-linear-gradient';
import { MainContext } from '../store/AuthContext';

export default function AuthScreen() {
  return (
    <LinearGradient style={styles.backgroundImage} colors={['#000000', '#000000']}>
    <ImageBackground source={require('../assets/background.jpg')} resizeMode='cover' style={styles.backgroundImage} imageStyle={styles.image}>
    <View style={styles.container}>
      <Authentication />
    </View>
    </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  },
    container: {
        flex: 1,
        justifyContent: 'center', 
        // backgroundColor: GlobalStyles.colors.backgroundColor
    },
    image: {
      opacity: 0.25
    }
})