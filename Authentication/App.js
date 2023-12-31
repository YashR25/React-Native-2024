import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthScreen from './screens/AuthScreen';
import { AuthContext, AuthContextProvider } from './store/AuthContext';
import { useContext, useEffect, useState } from 'react';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { GlobalStyles } from './constants/Style';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from './components/Loader';
import Icon from './components/Icon';


const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const authContext = useContext(AuthContext);
  const logoutHandler = () => {
    authContext.logout();
  }
  return (
    <LinearGradient colors={['#424242', GlobalStyles.colors.backgroundColor]} style={styles.gradientContainer}>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerStyle: {backgroundColor: GlobalStyles.colors.accentColor}, headerTintColor: GlobalStyles.colors.primaryColor}}> 
        <Stack.Screen name='Home' component={Home} options={{headerRight: () => <Icon name={'exit'} color={GlobalStyles.colors.primaryColor} size={24} onpress={logoutHandler}/>}}/>
      </Stack.Navigator>
    </LinearGradient>
  )
}

const Root = () => {
  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchToken() {
      setIsLoading(true)
      const fetchedToken = await AsyncStorage.getItem('token');
      if(fetchedToken){
        authContext.authenticate(fetchedToken);
      }
      setIsLoading(false)
    }
    fetchToken();
  }, [])

  if(isLoading){
    return <View style={styles.container}>
      <Loader color={GlobalStyles.colors.primaryColor}/>
    </View>
  }

  return (
    <View style={styles.container}>
      {!authContext.authtoken ? <AuthScreen /> : <Navigation />}
    </View>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light'/>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.backgroundColor,
  },
  gradientContainer: {
    flex: 1
  }
});
