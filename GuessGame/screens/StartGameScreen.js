import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/Title'
import Card from '../components/Card'
import Button from '../components/Button'
import Colors from '../constants/Colors'
import InstructionText from '../components/InstructionText'


export default function StartGameScreen({onPickedHandler}) {

  const [userNumber, setUserNumber] = useState('');

  const resetHandler = () => {
    setUserNumber('');
  }

  const confirmNumber = () => {
    if(userNumber < 1 || userNumber > 99 || isNaN(userNumber)){
      Alert.alert('Invalid Type', '', [{text: 'okay', onPress: resetHandler}]);
      return;
    }
    onPickedHandler(userNumber);
  }

  const onTextChangeHandler = (data) => {
    setUserNumber(data)
  }

  return (
    <View style={styles.rootCotainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter your number</InstructionText>
        <TextInput numberOfLines={1} value={userNumber} onChangeText={onTextChangeHandler} style={styles.textInput} keyboardType={'number-pad'} maxLength={2}/> 
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button onpress={resetHandler}>Reset</Button>
          </View>
          <View style={styles.button}> 
            <Button onpress={confirmNumber}>Confirm</Button>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    rootCotainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    textInput: {
      padding: 8,
      borderBottomColor: '#ddb52f',
      borderBottomWidth: 2,
      marginVertical: 20,
      color: Colors.accent500,
      fontSize: 32,
      fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    margin: 8
  }
})