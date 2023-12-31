import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GridItem({category, onpress}) {

  return (
    <View style={[styles.card, {backgroundColor: category.color}]}>
        <Pressable onPress={onpress} android_ripple={{color: '#8c8c8c'}} style={({pressed}) => [styles.cardContainer, pressed ? styles.pressed : null]}>
        <View>
            <Text style={styles.cardText}>{category.name}</Text>
        </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {width: 2,height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        flex: 1,
        height: 150,
        margin: 8
    },
    cardContainer: {
        flex: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    pressed: {
        opacity: 0.2
    }
})