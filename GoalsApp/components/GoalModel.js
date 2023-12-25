import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native'
import {React, useState} from 'react'

export default function GoalModel(props) {
    const [goal, setGoal] = useState({})

    const onInputChangeHandler = (changedText) => {
        setGoal({text: changedText, id: Math.random().toString()});
    }

    const clickHandler = () => {
        props.onAdd(goal);
        setGoal('');
    } 


    return (
            <Modal animationType='slide' visible={props.visible}>
                <View style={styles.inputContainer}>
                    <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                    <TextInput style={styles.input} placeholder='type....' value={goal.text} onChangeText={onInputChangeHandler}/>
                    <View style={styles.buttonContaier}>
                        <View style={styles.button}>
                        <Button title='Add' onPress={clickHandler}/>
                        </View>
                        <View style={styles.button}>
                        <Button title='Cancel' onPress={props.closeModal} />
                        </View>
                    </View>
                </View>
            </Modal>
    )

}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        backgroundColor: 'blue'
      },
      input: {
        borderWidth: 1,
        borderColor: '#dddddd',
        width: '90%',
        padding: 15,
        marginBottom: 8,
        backgroundColor: '#dddddd',
        borderRadius: 8,
      },
      buttonContaier: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      button: {
        margin: 8,
        width: 100
      },
      image: {
        width: 100,
        height: 100,
        margin: 8
      }
})