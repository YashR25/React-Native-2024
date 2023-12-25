import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import Card from '../components/Card'
import Button from '../components/Button'
import Colors from '../constants/Colors'
import InstructionText from '../components/InstructionText'
import Ionicons from '@expo/vector-icons/Ionicons'
import GuessLogItem from '../components/GuessLogItem'

const randomNumberGenerator = (min, max, exclude) => {
  const num = Math.floor(Math.random() * (max - min)) + min

  if(num === exclude){
    return randomNumberGenerator(min, max, exclude)
  }else{
    return num
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({userNumber, onGameOver}) {

  const initialGuess = randomNumberGenerator(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

  useEffect(() => {
    if(currentGuess == userNumber){
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, onGameOver])

  console.log(currentGuess)
  console.log(userNumber)

  

  const nextGuessHandler = (direction) => {
    if((direction === 'lower' && userNumber > currentGuess) || (direction === 'higher' && userNumber < currentGuess)){
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if(direction === 'lower'){
      maxBoundary = currentGuess
    }else{
      minBoundary = currentGuess + 1
    }

    const newRandomNumber = randomNumberGenerator(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessRounds((previousGuessRounds) => [newRandomNumber, ...previousGuessRounds])
  }

  const guessRoundsLength = guessRounds.length

  return (
    <View style={styles.rootContainer}>
      <Title>Opponent's Guess</Title>
      <View style={styles.guess}>
        <Text style={styles.guessText}>{currentGuess}</Text>
      </View>
      <Card>
        <InstructionText>Guess lower or higher</InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
          <Button onpress={nextGuessHandler.bind(this, 'higher')}>
            <Ionicons name='add' size={20} />
          </Button>
          </View>
          <View style={styles.button}>
          <Button onpress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name='remove' size={20} />
          </Button>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
      <FlatList data={guessRounds} renderItem={(itemData) => 
          <GuessLogItem guess={itemData.item} itemIndex={guessRoundsLength - itemData.index}/>
      } keyExtractor={(item) => item}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    marginTop: 100,
  },
  listContainer: {
    flex: 1,
    padding: 16
  },
  buttonContainer:{
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    margin: 8
  },
  guess: {
    borderColor: Colors.accent500,
    borderWidth: 2,
    borderRadius: 8,
    padding: 16,
    marginTop: 50
  },
  guessText: {
    fontSize: 32,
    color: Colors.accent500,
    fontWeight: 'bold',

  }
})