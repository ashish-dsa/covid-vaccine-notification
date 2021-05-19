import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption, Checkbox } from "react-native-paper";
import { IFilters } from "screens/models";

interface ISearchFilters {
  filters: IFilters;
  setFilters: Function;
}

export const DoseFilter = ({ filters, setFilters }: ISearchFilters) => {
  return (
    <>
      <View style={styles.checkBoxRow}>
        <Checkbox
          status={filters.dose1 ? "checked" : "unchecked"}
          onPress={() => {
            setFilters({
              ...filters,
              dose1: !filters.dose1,
            });
          }}
        />
        <Caption style={styles.captionStyle}>Dose 1</Caption>
      </View>
      <View style={styles.checkBoxRow}>
        <Checkbox
          status={filters.dose2 ? "checked" : "unchecked"}
          onPress={() => {
            setFilters({
              ...filters,
              dose2: !filters.dose2,
            });
          }}
        />
        <Caption style={styles.captionStyle}>Dose 2</Caption>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  filters: {
    marginHorizontal: "6%",
    marginVertical: "5%",
  },
  checkBoxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -8,
  },
  captionStyle: {
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 14,
  },
});
