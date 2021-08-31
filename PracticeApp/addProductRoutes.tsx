import { StackNavigationState } from "@react-navigation/native";
import { TypedNavigator } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, Text, Button } from "react-native";
import { Center } from "./Center";
import { HomeParamList, HomeStackNavProps } from "./HomeParamList";
import { SearchParamList } from "./SearchParamList";

export const addProductRoutes = (
  Stack: TypedNavigator<
    HomeParamList | SearchParamList,
    StackNavigationState,
    any,
    any,
    any
  >
) => {
  return (
    <>
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Product : ${route.params.name}`,
        })}
        name="Product"
        component={Product}
      />

      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Edit : ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              style={{ paddingRight: 8 }}
              onPress={() => {
                //submit
                route.params.submit?.current();
              }}>
              <Text>Done</Text>
            </TouchableOpacity>
          ),
        })}
        name="EditProduct"
        component={EditProduct}
      />
    </>
  );
};

function Product({ route, navigation }: HomeStackNavProps<"Product">) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="edit this product"
        onPress={() =>
          navigation.navigate("EditProduct", {
            name: route.params.name,
          })
        }
      />
    </Center>
  );
}

function apiCall(x: any) {
  return x;
}

function EditProduct({ route, navigation }: HomeStackNavProps<"EditProduct">) {
  const [formState] = useState();
  const submit = useRef(() => {});

  submit.current = () => {
    //api call with a new state
    apiCall(formState);
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setParams({ submit });
  }, []);

  return (
    <Center>
      <Text>editing {route.params.name}...</Text>
    </Center>
  );
}
