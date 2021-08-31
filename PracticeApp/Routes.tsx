import React, { useState, useEffect, useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { Text, ActivityIndicator } from "react-native";
import { Center } from "./Center";

import { AuthContext } from "./AuthProvider";
import { AppTabs } from "./AppTabs";
import { AuthStack } from "./AuthStack";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //check if user is logged in or not - logic
    // AsyncStorage.getItem("user")
    //   .then((userStr) => {
    //     console.log(userStr);
    //   if(user String) {
    //      login();
    //}
    //  setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    setLoading(false);
  });

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </Center>
    );
  }
  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
