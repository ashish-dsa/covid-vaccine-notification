import { BaseNavigator } from "navigation/BaseNavigator";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { stopForegroundService } from "services/foreground";
import ErrorBoundary from "services/reporting/ErrorBoundary";
import { setExceptionHandler } from "services/reporting/setExceptionHandler";

setExceptionHandler();
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

  useEffect(() => {
    stopForegroundService();
  }, []);
  return (
    <ErrorBoundary>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <BaseNavigator />
      </PaperProvider>
    </ErrorBoundary>
  );
};

export default App;
