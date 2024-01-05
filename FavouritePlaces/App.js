import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AllPlaces from "./screens/AllPlaces";
import Icon from "./components/Icon";
import AddPlace from "./screens/AddPlace";
import { GlobalStyle } from "./constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import Map from "./screens/Map";
import { useCallback, useEffect, useState } from "react";
import { init } from "./database/Database";
import * as SplashScreen from "expo-splash-screen";
import PlaceDetail from "./screens/PlaceDetail";

const Stack = createNativeStackNavigator();
// SplashScreen.preventAutoHideAsync();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AllPlaces"
        screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyle.colors.primary600,
          },
          headerTintColor: GlobalStyle.colors.textColor,
          contentStyle: { backgroundColor: GlobalStyle.colors.primary500 },
          // headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={({ navigation }) => {
            return {
              headerRight: () => (
                <Icon
                  name="add"
                  size={24}
                  onPress={() => navigation.navigate("AddPlace")}
                  color={GlobalStyle.colors.textColor}
                />
              ),
            };
          }}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlace}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="MapScreen" component={Map} />
        <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  const [isDbInitialized, setIsDbInitialized] = useState(false);
  useEffect(() => {
    init().then((result) => {
      setIsDbInitialized(true);
    });
  }, []);

  // const onDatabaseInitialized = useCallback(async () => {
  //   if (isDbInitialized) {
  //     await SplashScreen.hideAsync();
  //   }
  // });

  // useEffect(() => {
  //   onDatabaseInitialized();
  // }, [isDbInitialized]);

  if (!isDbInitialized) {
    return (
      <View style={styles.container}>
        <Text>Loading....</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[GlobalStyle.colors.primary600, GlobalStyle.colors.primary500]}
        style={styles.gradient}
      >
        <Navigation />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
  },
});
