import React from "react";
import { StyleSheet, View } from "react-native";
import { Subheading } from "react-native-paper";
import { IFilters } from "screens/models";
import { AgeFilter, NotifyFilter, PriceFilter, VaccineBrandFilter } from "./Filters";

interface ISearchFilters {
  filters: IFilters;
  setFilters: Function;
}
export const SearchFilters = ({ filters, setFilters }: ISearchFilters) => {
  return (
    <View style={styles.filters}>
      <Subheading>Filters</Subheading>
      <AgeFilter filters={filters} setFilters={setFilters} />
      <PriceFilter filters={filters} setFilters={setFilters} />
      <VaccineBrandFilter filters={filters} setFilters={setFilters} />
      <NotifyFilter filters={filters} setFilters={setFilters} />
    </View>
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
