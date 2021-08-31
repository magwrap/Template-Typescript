import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, Button } from "react-native";
import { Center } from "./Center";
import { AuthParamList, AuthNavProps } from "./AuthParamList";
import { AuthContext } from "./AuthProvider";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({ navigation }: AuthNavProps<"Login">) {
  const { login } = useContext(AuthContext);
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button
        title="Log me in"
        onPress={() => {
          login();
        }}
      />
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

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        //zwykle nie ma headera w sekcji login/signup
        header: () => null,
      }}>
      <Stack.Screen
        name="Login"
        options={
          {
            // headerTitle: "Sign In",
          }
        }
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={
          {
            // headerTitle: "Sign Up",
          }
        }
        component={Register}
      />
    </Stack.Navigator>
  );
};
