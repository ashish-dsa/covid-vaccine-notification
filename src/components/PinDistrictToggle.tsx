import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
export const PinDistrictToggle = ({
  searchOption,
  setSearchOption,
}: {
  searchOption: string;
  setSearchOption: Function;
}) => {
  return (
    <View style={styles.toggle}>
      <View style={styles.base}>
        <Button
          icon="map-marker-radius"
          mode="contained"
          onPress={() => {}}
          style={styles.button}
          disabled={searchOption !== "pincode"}
          onTouchStart={() => setSearchOption("pincode")}
        >
          Pincode
        </Button>
        <Button
          icon="map-marker-multiple"
          mode="contained"
          onPress={() => {}}
          style={styles.button}
          disabled={searchOption === "pincode"}
          onMagicTap={() => setSearchOption("district")}
          onTouchStart={() => setSearchOption("district")}
        >
          District
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {},
  toggle: {
    marginHorizontal: "6%",
    marginVertical: "8%",
  },
});
