import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'
import Colors from './constants/Colors';
import { useState } from 'react';
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen';


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRoundLength, setGuessRoundLegth] = useState(0);

  const pickedHandler = (number) => {
    setUserNumber(number)
    setIsGameOver(false)
  }

  const gameOverHandler = (length) => {
    setIsGameOver(true);
    setGuessRoundLegth(length)
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRoundLegth(0);
  }

  console.log(userNumber);

  let screen = <StartGameScreen onPickedHandler={pickedHandler}/>

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(isGameOver && userNumber){
    screen = <GameOverScreen roundsNumber={guessRoundLength} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>
  }

  return (
    <LinearGradient colors={[Colors.primary500, Colors.accent500]} style={styles.rootContainer}>
      <ImageBackground source={require('./assets/image/bg-image.jpg')} resizeMode='cover' style={styles.rootContainer} imageStyle={styles.backgroundImage}>
      <SafeAreaView style={styles.rootContainer}>
        {screen}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.25
  }

});
