import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption, Checkbox } from "react-native-paper";
import { IFilters } from "screens/models";

interface ISearchFilters {
  filters: IFilters;
  setFilters: Function;
}

export const AgeFilter = ({ filters, setFilters }: ISearchFilters) => {
  return (
    <>
      <View style={styles.checkBoxRow}>
        <Checkbox
          status={filters.senior ? "checked" : "unchecked"}
          onPress={() => {
            setFilters({
              ...filters,
              senior: !filters.senior,
            });
          }}
        />
        <Caption style={styles.captionStyle}>45+ years</Caption>
      </View>
      <View style={styles.checkBoxRow}>
        <Checkbox
          status={filters.adult ? "checked" : "unchecked"}
          onPress={() => {
            setFilters({
              ...filters,
              adult: !filters.adult,
            });
          }}
        />
        <Caption style={styles.captionStyle}>18 - 45 years</Caption>
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
