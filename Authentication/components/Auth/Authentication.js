import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Form from './Form'
import { GlobalStyles } from '../../constants/Style'
import { AuthContext } from '../../store/AuthContext';
import { login, signup } from '../../utils/FirebaseAuth';

export default function Authentication() {

  const authContext = useContext(AuthContext);

  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)

  const pressHandler = () => {
    setIsSignup(current => !current)
  }

  const submitHandler = async (credentials) => { 
    const {email, password} = credentials;
    let token;
    if(isSignup){
      try {
        setIsLoading(true)
        token = await signup({email, password}) 
        setError(false)
      } catch (error) {
        setError(true);
        setIsLoading(false)
        console.log(error)
      }
    }else if(!isSignup){
      try {
        setIsLoading(true)
        token = await await login({email, password});
        setError(false)
      } catch (error) {
        setError(true)
        setIsLoading(false)
        console.log(error)
      }
      
    }
    authContext.authenticate(token);
  }

  return (
    <View style={styles.authenticationContainer}>
      <Form isSignup={isSignup} toggleSignup={pressHandler} onSubmit={submitHandler} isLoading={isLoading}/>
      {error && <Text style={styles.errorText}>Something went wrong! Check your email and password and try again!</Text>}
    </View>
  )
}

const styles = StyleSheet.create({ 
    authenticationContainer: {
        marginHorizontal: 16,
    },
    errorText: {
      color: '#ff9999',
      marginVertical: 8
    }

})