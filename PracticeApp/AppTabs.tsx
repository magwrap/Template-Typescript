import React, { useContext } from "react";
import { Button, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from "./AppParamList";
import { Center } from "./Center";
import { AuthContext } from "./AuthProvider";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import { HomeStack } from "./HomeStack";
import { SearchStack } from "./SearchStack";
// wszystkie ikony --> https://icons.expo.fyi

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "info" : "home";
          } else if (route.name === "Search") {
            return <EvilIcons name="search" size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}>
      <Tabs.Screen
        name="Home"
        component={HomeStack}
        options={{ header: () => null }}
      />
      <Tabs.Screen
        name="Search"
        component={SearchStack}
        options={{ header: () => null }}
      />
    </Tabs.Navigator>
  );
};
