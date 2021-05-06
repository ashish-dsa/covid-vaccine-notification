import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption, Checkbox, Subheading } from "react-native-paper";

export const SearchFilters = ({
  allChecked,
  setAllChecked,
  setAdultsChecked,
  adultsChecked,
  notifyChecked,
  setNotifyChecked,
  freeChecked,
  setFreeChecked,
  paidChecked,
  setPaidChecked,
}: {
  allChecked: boolean;
  setAllChecked: Function;
  setAdultsChecked: Function;
  adultsChecked: boolean;
  notifyChecked: boolean;
  setNotifyChecked: Function;
  freeChecked: boolean;
  setFreeChecked: Function;
  paidChecked: boolean;
  setPaidChecked: Function;
}) => {
  return (
    <View style={styles.filters}>
      <Subheading>Filters</Subheading>
      <View style={styles.checkBoxRow}>
        <Checkbox
          status={allChecked ? "checked" : "unchecked"}
          onPress={() => {
            setAllChecked(!allChecked);
          }}
        />
        <Caption style={styles.captionStyle}>45+ years</Caption>
      </View>
      <View style={styles.checkBoxRow}>
        <Checkbox
          status={adultsChecked ? "checked" : "unchecked"}
          onPress={() => {
            setAdultsChecked(!adultsChecked);
          }}
        />
        <Caption style={styles.captionStyle}>18 - 45 years</Caption>
      </View>
      <View style={styles.checkBoxRow}>
        <Checkbox
          status={freeChecked ? "checked" : "unchecked"}
          onPress={() => {
            setFreeChecked(!freeChecked);
          }}
        />
        <Caption style={styles.captionStyle}>Free Vaccine</Caption>
      </View>
      <View style={styles.checkBoxRow}>
        <Checkbox
          status={paidChecked ? "checked" : "unchecked"}
          onPress={() => {
            setPaidChecked(!paidChecked);
          }}
        />
        <Caption style={styles.captionStyle}>Paid Vaccine</Caption>
      </View>
      <View style={styles.checkBoxRow}>
        <Checkbox
          status={notifyChecked ? "checked" : "unchecked"}
          onPress={() => {
            setNotifyChecked(!notifyChecked);
          }}
        />
        <Caption style={styles.captionStyle}>Notify me when vaccine is available</Caption>
      </View>
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
