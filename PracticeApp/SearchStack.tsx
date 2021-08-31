import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { Center } from "./Center";
import { SearchParamList } from "./SearchParamList";
import { Button, FlatList, Text } from "react-native";
import faker from "faker";
import { addProductRoutes } from "./addProductRoutes";

interface SearchStackProps {}

const Stack = createStackNavigator<SearchParamList>();

function Search({ navigation }) {
  const [show, setShow] = useState(false);
  return (
    <Center>
      <Button
        title="Search Products"
        onPress={() => {
          setShow(true);
        }}
      />
      <Text>search</Text>
      {show && (
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
      )}
    </Center>
  );
}

export const SearchStack: React.FC<SearchStackProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={Search} />
      {addProductRoutes(Stack)}
    </Stack.Navigator>
  );
};
