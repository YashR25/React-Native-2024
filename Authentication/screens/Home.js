import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalStyles } from '../constants/Style'
import {AuthContext} from '../store/AuthContext'
import axios from 'axios'

export default function Home() {
  const [fetchedData, setFetchedData] = useState('');

  const authctx = useContext(AuthContext);
  const token = authctx.authtoken;


  useEffect(() => {
    axios.get(`https://react-native-auth-40010-default-rtdb.firebaseio.com/message.json?auth=${token}`)
      .then((res) => {
        setFetchedData(res.data);
      })
  }, [token])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{fetchedData}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: GlobalStyles.colors.primaryColor,
        fontWeight: 'bold'
    }
})