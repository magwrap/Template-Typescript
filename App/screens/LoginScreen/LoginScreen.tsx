import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Login Page... again"
        onPress={() => navigation.push("Login")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Go to Photos Page"
        onPress={() => navigation.navigate("Photos")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
