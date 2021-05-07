import { NavigationProp } from "@react-navigation/native";
import { CentersList } from "components/CentersList";
import { LoadingIndicator } from "components/LoadingIndicator";
import { NoCenters } from "components/NoCenters";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Appbar, withTheme } from "react-native-paper";
import { addToStorage, STORAGE } from "services/storage";
import { mockSleep } from "utils/mockSleep";
import { executeSearch } from "./helpers/executeSearch";
import { ISearchParams } from "./helpers/models/ISearchParams";
import { startSearchService } from "./helpers/startSearchService";

interface ISearchResults {
  route: any;
  navigation: NavigationProp<any>;
  theme: ReactNativePaper.Theme;
}
const SearchResults = ({ route, navigation, theme }: ISearchResults) => {
  const { allChecked, adultsChecked, notifyChecked, freeChecked, paidChecked, searchType, searchParams } = route.params;
  const [showLoader, setShowLoader] = useState(true);
  const [centersList, setCentersList] = useState([]);

  let timer: any;
  const performSearch = async () => {
    const currentSearchParams: ISearchParams = {
      searchType: searchType,
      searchParams: searchParams,
      allChecked: allChecked,
      adultsChecked: adultsChecked,
      freeChecked: freeChecked,
      paidChecked: paidChecked,
    };
    await addToStorage(STORAGE.searchParams, JSON.stringify(currentSearchParams));
    await mockSleep(1000);
    const formattedResponse = await executeSearch();
    setCentersList(formattedResponse);
    setShowLoader(false);
    if (notifyChecked) {
      startSearchService();
    }
  };
  useEffect(() => {
    performSearch();
    return () => {};
  }, [searchParams]);

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Search Results" subtitle="" />
      </Appbar.Header>
      <LoadingIndicator visible={showLoader} />
      <CentersList centersList={centersList} />
      <NoCenters visible={!showLoader} centersList={centersList} />
    </>
  );
};

const styles = StyleSheet.create({
  loader: {
    height: "90%",
  },
  card: {
    marginVertical: "1%",
    marginHorizontal: "2%",
  },
  vaccineOver45: {
    backgroundColor: "green",
    height: "40%",
  },
  vaccineOver18: {},
  viewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewColumn: {},
  noCenters: {
    top: 0,
  },
});

export default withTheme(SearchResults);
