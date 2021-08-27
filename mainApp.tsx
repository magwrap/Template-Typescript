import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "./App/config/Colors";

import LogoTitle from "./App/components/LogoTitle/LogoTitle";

import HomeScreen from "./App/screens/HomeScreen/HomeScreen";
import LoginScreen from "./App/screens/LoginScreen/LoginScreen";
import SignUpScreen from "./App/screens/SignUpScreen/SignUpScreen";
import PhotosScreen from "./App/screens/PhotosScreen/PhotosScreen";

//TODO: firebase - database, react navigation, clean styles, clean structure,
//logujesz sie, dodajesz zdjecie jedzenia, ludzie moga je oceniac
//feed widzisz ostatnie zdjecia, najwyzej oceniane zdjecia

export default function PollyingApp() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.D_lightBlack,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                <Button
                  onPress={() => alert("This is a button!")}
                  title="Info"
                  color="#fff"
                />
              ),
            }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Photos" component={PhotosScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
