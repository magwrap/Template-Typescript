import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
      <Button title="Login in" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
