import React from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

export const LoadingIndicator = ({ visible }: { visible: boolean }) => {
  if (!visible) {
    return null;
  }
  return <ActivityIndicator animating={true} color={Colors.red800} style={styles.loader} />;
};

const styles = StyleSheet.create({
  loader: {
    height: "90%",
  },
});
