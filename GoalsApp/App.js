import { StatusBar } from 'expo-status-bar';
import { useId, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalModel from './components/GoalModel';

export default function App() {
  
  const [goals, setGoals] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const onGoalPressHandler = (id) => {
      console.log(id);
      setGoals(goals.filter((currentGoal) => currentGoal.id !== id));
  }

  const toggleModal = () => {
      setIsModalVisible(true);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }


  const clickHandler = (goal) => {
    setGoals(previousGoals => [...previousGoals, goal])
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.addbutton}>
      <Button onPress={toggleModal} title='Add Goal'/>
      </View>
      
      <GoalModel onAdd={clickHandler} visible={isModalVisible} closeModal={closeModal}/>
      <View style={styles.listContainer}>
        <ScrollView>
          {goals.map((goal) => (
            <GoalItem goal={goal} onDelete={onGoalPressHandler} onAdd={clickHandler}/>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16 
  },
  listContainer: {
    flex: 5,
    width: '100%'
  },
  addbutton: {
    width: '80%',
    borderRadius: 10,
  }
});
