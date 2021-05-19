import { NavigationProp } from "@react-navigation/core";
import { ROUTES } from "navigation/constants";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { stopForegroundService } from "services/foreground";
export const MainOptions = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View style={styles.base}>
      <Button
        icon="calendar-month"
        mode="contained"
        onPress={() => navigation.navigate(ROUTES.Appointment)}
        style={styles.button}
      >
        Schedule Vaccination
      </Button>
      <Button
        icon="bell-ring"
        mode="contained"
        onPress={() => navigation.navigate(ROUTES.SearchAndNotify)}
        style={styles.button}
      >
        Notify for Vaccination
      </Button>
      <Button
        icon="bell-off"
        mode="contained"
        disabled={false}
        onPress={() => stopForegroundService()}
        style={styles.button}
      >
        Stop Notifying me
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  button: {
    marginHorizontal: "5%",
    marginVertical: "5%",
    width: "90%",
  },

  buttonContent: {
    height: 100,
    flexDirection: "row",
  },
  backgroundStyle: {
    height: "100%",
  },
});
