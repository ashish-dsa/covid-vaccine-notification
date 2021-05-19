import React from "react";
import { StyleSheet, View } from "react-native";
import { Paragraph, Title } from "react-native-paper";

export const NoCenters = ({ visible, centersList }: { visible: boolean; centersList: Array<any> }) => {
  if ((visible && !centersList) || (visible && centersList.length === 0)) {
    return (
      <View style={styles.noCenters}>
        <View style={styles.viewRow}>
          <View style={styles.viewColumn}>
            <Title>No vaccine available at centers with given filters.</Title>
            <Paragraph>
              We will keep checking in the background and notify you once vaccines are available. Push the app in
              background, Do not kill the app!
            </Paragraph>
          </View>
        </View>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  noCenters: {
    top: 0,
    height: "10%",
    marginVertical: "1%",
    marginHorizontal: "2%",
  },
  viewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewColumn: {},
});
