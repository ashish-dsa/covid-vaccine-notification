import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption, Checkbox } from "react-native-paper";
import { IFilters } from "screens/models";

interface ISearchFilters {
  filters: IFilters;
  setFilters: Function;
}

export const NotifyFilter = ({ filters, setFilters }: ISearchFilters) => {
  return (
    <>
      <View style={styles.checkBoxRow}>
        <Checkbox
          status={filters.notify ? "checked" : "unchecked"}
          onPress={() => {
            setFilters({
              ...filters,
              notify: !filters.notify,
            });
          }}
        />
        <Caption style={styles.captionStyle}>Notify me when vaccine is available</Caption>
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
