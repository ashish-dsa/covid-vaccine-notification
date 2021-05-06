import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import React from "react";
import Appointment from "screens/Appointment";
import Home from "screens/Home";
import SearchAndNotify from "screens/SearchAndNotify";
import SearchResults from "screens/SearchResults";
import { ROUTES } from "./constants";

export const BaseNavigator = () => {
  const Stack = createStackNavigator();
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
  };
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" screenOptions={{ ...TransitionScreenOptions, headerShown: false }}>
        <Stack.Screen name={ROUTES.Home} component={Home} />
        <Stack.Screen name={ROUTES.Appointment} component={Appointment} />
        <Stack.Screen name={ROUTES.SearchAndNotify} component={SearchAndNotify} />
        <Stack.Screen name={ROUTES.SearchResults} component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
