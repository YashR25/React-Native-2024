import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './screens/Categories';
import MealScreen from './screens/MealScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='categories' screenOptions={{contentStyle: {backgroundColor: '#4d0000'}, headerStyle: {backgroundColor: '#800000'}, headerTintColor: 'white'}}>
        <Stack.Screen name='categories' component={Categories} options={{title: 'All Categories'}}/>
        <Stack.Screen name='meals' component={MealScreen} options={{title: 'Meals'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
