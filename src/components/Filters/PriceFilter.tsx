import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption, Checkbox } from "react-native-paper";
import { IFilters } from "screens/models";

interface ISearchFilters {
  filters: IFilters;
  setFilters: Function;
}

export const PriceFilter = ({ filters, setFilters }: ISearchFilters) => {
  return (
    <>
      <View style={styles.checkBoxRow}>
        <Checkbox
          status={filters.free ? "checked" : "unchecked"}
          onPress={() => {
            setFilters({
              ...filters,
              free: !filters.free,
            });
          }}
        />
        <Caption style={styles.captionStyle}>Free Vaccine</Caption>
      </View>
      <View style={styles.checkBoxRow}>
        <Checkbox
          status={filters.paid ? "checked" : "unchecked"}
          onPress={() => {
            setFilters({
              ...filters,
              paid: !filters.paid,
            });
          }}
        />
        <Caption style={styles.captionStyle}>Paid Vaccine</Caption>
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
