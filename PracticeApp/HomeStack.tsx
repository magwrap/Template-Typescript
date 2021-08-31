import { createStackNavigator } from "@react-navigation/stack";
import faker from "faker";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, FlatList, Text, TouchableOpacity } from "react-native";
import { addProductRoutes } from "./addProductRoutes";
import { AuthContext } from "./AuthProvider";
import { Center } from "./Center";
import { HomeParamList, HomeStackNavProps } from "./HomeParamList";

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

function Feed({ navigation }: HomeStackNavProps<"Feed">) {
  return (
    <Center>
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate("Product", {
                  name: item,
                });
              }}
            />
          );
        }}
        data={Array.from(Array(50), () => faker.commerce.product())}
        keyExtractor={(product, id) => product + id}
      />
    </Center>
  );
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Feed">
      {addProductRoutes(Stack)}
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}>
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};
