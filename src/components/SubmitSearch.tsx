import { NavigationProp } from "@react-navigation/native";
import { ROUTES } from "navigation/constants";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

interface ISubmitSearch {
  allChecked: boolean;
  adultsChecked: boolean;
  notifyChecked: boolean;
  searchType: string;
  freeChecked: boolean;
  paidChecked: boolean;
  searchParams: any;
  navigation: NavigationProp<any>;
}
export const SubmitSearch = ({
  allChecked,
  adultsChecked,
  notifyChecked,
  searchType,
  freeChecked,
  paidChecked,
  searchParams,
  navigation,
}: ISubmitSearch) => {
  const [validateSearchParams, setValidateSearchParams] = useState(true);
  const validate = () => {
    if ((allChecked || adultsChecked) && (paidChecked || freeChecked) && searchParams) {
      setValidateSearchParams(false);
    } else {
      setValidateSearchParams(true);
    }
  };

  const executeSearch = async () => {
    navigation.navigate(ROUTES.SearchResults, {
      allChecked: allChecked,
      adultsChecked: adultsChecked,
      notifyChecked: notifyChecked,
      freeChecked: freeChecked,
      paidChecked: paidChecked,
      searchParams: searchParams,
      searchType: searchType,
    });
    validate();
  };

  useEffect(() => {
    validate();
    return () => {};
  }, [allChecked, paidChecked, notifyChecked, freeChecked, adultsChecked, searchParams, searchType]);
  return (
    <>
      <Button
        icon="cloud-search"
        mode="contained"
        disabled={validateSearchParams}
        onPress={() => executeSearch()}
        style={styles.searchButton}
      >
        Search
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  searchButton: {
    marginHorizontal: "6%",
  },
  indicator: {
    marginVertical: "10%",
  },
});
