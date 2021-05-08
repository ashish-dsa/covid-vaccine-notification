import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption, Checkbox } from "react-native-paper";
import { IFilters } from "screens/models";

interface ISearchFilters {
  filters: IFilters;
  setFilters: Function;
}

export const VaccineBrandFilter = ({ filters, setFilters }: ISearchFilters) => {
  return (
    <>
      <View style={styles.checkBoxRow}>
        <Checkbox
          status={filters.covishield ? "checked" : "unchecked"}
          onPress={() => {
            setFilters({
              ...filters,
              covishield: !filters.covishield,
            });
          }}
        />
        <Caption style={styles.captionStyle}>COVISHIELD</Caption>
      </View>
      <View style={styles.checkBoxRow}>
        <Checkbox
          status={filters.covaxin ? "checked" : "unchecked"}
          onPress={() => {
            setFilters({
              ...filters,
              covaxin: !filters.covaxin,
            });
          }}
        />
        <Caption style={styles.captionStyle}>COVAXIN</Caption>
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
