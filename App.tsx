import { BaseNavigator } from "navigation/BaseNavigator";
import React from "react";
import { StatusBar } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const App = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#000000",
      accent: "#018786",
    },
  };
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <BaseNavigator />
    </PaperProvider>
  );
};

export default App;
