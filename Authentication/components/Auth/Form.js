import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import CustomButton from '../CustomButton'
import { GlobalStyles } from '../../constants/Style'

const defaultValues = {
    email: {value: '', isValid: true},
    confirmEmail: {value: '', isValid: true},
    password: {value: '', isValid: true},
    confirmPassword: {value: '', isValid: true}
}

export default function Form({isSignup, toggleSignup, onSubmit, isLoading}) {

  const [formData, setFormData] = useState(defaultValues)

  const toggleSignupHandler = () => {
    setFormData(defaultValues);
    toggleSignup();
  }
  

  const onInputChangeHandler = (inputType, value) => {
    setFormData((currentData) => {
      return {
        ...currentData,
        [inputType]: {value: value, isValid: true}
      }
    })
  }

  const submitHandler = () => {

    const credentials = {
      email: formData.email.value,
      confirmEmail: formData.confirmEmail.value,
      password: formData.password.value,
      confirmPassword: formData.confirmPassword.value
    }
    
    const isEmailValid = (formData.email.value !== '')
    const isConfirmEmailValid = isEmailValid && (formData.email.value === formData.confirmEmail.value)
    const isPasswordValid = (formData.password.value !== '')
    const isConfirmPasswordValid = isPasswordValid && (formData.password.value === formData.confirmPassword.value)

    const signInFormInValid = !isEmailValid || !isPasswordValid
    const signupFormInValid = !isEmailValid || !isConfirmEmailValid || !isPasswordValid || !isConfirmPasswordValid

    if(isSignup && signupFormInValid){
          setFormData((curData) => {
            return {
              email: {value: curData.email.value, isValid: isEmailValid},
              confirmEmail: {value: curData.confirmEmail.value, isValid: isConfirmEmailValid},
              password: {value: curData.password.value, isValid: isPasswordValid},
              confirmPassword: {value: curData.confirmPassword.value, isValid: isConfirmPasswordValid}
            }
          })
          return;
    }
    if(!isSignup && signInFormInValid ){
      if(signInFormInValid){
          setFormData((curData) => {
            return {
              ...curData,
              email: {value: curData.email.value, isValid: isEmailValid},
              password: {value: curData.password.value, isValid: isPasswordValid}
            }
          })
          return;
      }
    }

    onSubmit(credentials)
  }

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>{isSignup ? 'Signup' : 'Login'}</Text>
      <Input isValid={formData.email.isValid} value={formData.email.value} label={'Email'} inputProps={{placeholder: 'Enter your email'}} onInputChangeHandler={onInputChangeHandler.bind(this, 'email')}/>
      {isSignup && <Input isValid={formData.confirmEmail.isValid} value={formData.confirmEmail.value} label={'Confirm Email'} inputProps={{placeholder: 'Confirm your email'}} onInputChangeHandler={onInputChangeHandler.bind(this, 'confirmEmail')}/>}
      <Input isValid={formData.password.isValid} value={formData.password.value} label={'Password'} inputProps={{placeholder: 'Enter your password'}} onInputChangeHandler={onInputChangeHandler.bind(this, 'password')}/>
      {isSignup && <Input isValid={formData.confirmPassword.isValid} value={formData.confirmPassword.value} label={'Confirm Password'} inputProps={{placeholder: 'Confirm your password'}} onInputChangeHandler={onInputChangeHandler.bind(this, 'confirmPassword')}/>}
      <CustomButton text={isSignup ? 'Signup' : 'Login'} textStyle={{fontWeight: 'bold', fontSize: 18}} onPress={submitHandler} showLoader={isLoading}/>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Pressable android_ripple={{color: GlobalStyles.colors.secondaryColor}} onPress={toggleSignupHandler}>
        <Text style={styles.smallText}>{isSignup ? 'Already Registered! Login' : 'Not Registered! Signup'}</Text>
      </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    
  },
  border: {
    borderColor: 'red',
    borderWidth: 1
  },
  smallText: {
    fontSize: 14,
    color: GlobalStyles.colors.secondaryColor,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: GlobalStyles.colors.primaryColor,
    textAlign: "center",
    marginVertical: 8
  }, 
})