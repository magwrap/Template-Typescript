import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function PhotosScreen({ navigation }: any) {
  return (
    <View>
      <Text>Photos Screen</Text>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
