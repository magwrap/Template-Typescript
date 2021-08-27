import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { Center } from "./Center";
import { AuthParamList, AuthNavProps } from "./AuthParamList";

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({ navigation }: any) {
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button
        title="go to register"
        onPress={() => navigation.navigate("Register")}
      />
    </Center>
  );
}

function Register({ navigation, route }: AuthNavProps<"Register">) {
  return (
    <Center>
      <Text>route name = {route.name}</Text>
      <Button
        title="go to login"
        onPress={() => navigation.navigate("Login")}
      />
    </Center>
  );
}

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{
            headerTitle: "Sign In",
          }}
          component={Login}
        />
        <Stack.Screen
          name="Register"
          options={{
            headerTitle: "Sign Up",
          }}
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
