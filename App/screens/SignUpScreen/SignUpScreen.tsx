import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function SignUpScreen({ navigation }: any) {
  return (
    <View>
      <Text></Text>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
