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
    <View style={styles.base}>
      <Button
        icon="map-marker-radius"
        mode="contained"
        onPress={() => {}}
        style={styles.rightButton}
        disabled={searchOption !== "pincode"}
        onTouchStart={() => setSearchOption("pincode")}
      >
        Pincode
      </Button>
      <Button
        icon="map-marker-multiple"
        mode="contained"
        onPress={() => {}}
        style={styles.leftButton}
        disabled={searchOption === "pincode"}
        onMagicTap={() => setSearchOption("district")}
        onTouchStart={() => setSearchOption("district")}
      >
        District
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    height: "15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rightButton: {
    marginVertical: "5%",
    paddingRight: "12%",
  },
  leftButton: {
    marginVertical: "5%",
    paddingLeft: "12%",
  },
  pincode: {
    marginHorizontal: "6%",
  },
});
