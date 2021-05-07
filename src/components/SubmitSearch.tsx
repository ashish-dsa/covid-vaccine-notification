import { ROUTES } from "navigation/constants";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { ISearchParams } from "screens/models";
import { addToStorage, STORAGE } from "services/storage";
import { mockSleep } from "utils/mockSleep";

export const SubmitSearch = ({ filters, searchParams, searchType, navigation }: ISearchParams) => {
  const [validateSearchParams, setValidateSearchParams] = useState(true);
  const filtersString = JSON.stringify(filters);
  const validate = () => {
    if (
      (filters.senior || filters.adult) &&
      (filters.paid || filters.free) &&
      (filters.covaxin || filters.covishield) &&
      searchParams
    ) {
      setValidateSearchParams(false);
    } else {
      setValidateSearchParams(true);
    }
  };

  const navigateToResults = async () => {
    const currentSearchParams: ISearchParams = {
      searchType: searchType,
      searchParams: searchParams,
      filters: filters,
    };
    await addToStorage(STORAGE.searchParams, JSON.stringify(currentSearchParams));
    await mockSleep(1000);
    //@ts-ignore
    navigation.navigate(ROUTES.SearchResults, {});
  };

  useEffect(() => {
    validate();
    return () => {};
  }, [filtersString, searchParams, searchType]);
  return (
    <>
      <Button
        icon="cloud-search"
        mode="contained"
        disabled={validateSearchParams}
        onPress={() => navigateToResults()}
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
    marginVertical: "4%",
  },
});
