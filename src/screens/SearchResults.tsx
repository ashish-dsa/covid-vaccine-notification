import { NavigationProp } from "@react-navigation/native";
import { CentersList, LoadingIndicator, NoCenters } from "components/searchResults";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Appbar, withTheme } from "react-native-paper";
import { getFromStorage, STORAGE } from "services/storage";
import { executeSearch } from "./helpers/executeSearch";
import { startSearchService } from "./helpers/startSearchService";

interface ISearchResults {
  route: any;
  navigation: NavigationProp<any>;
  theme: ReactNativePaper.Theme;
}
const SearchResults = ({ route, navigation, theme }: ISearchResults) => {
  const [showLoader, setShowLoader] = useState(true);
  const [centersList, setCentersList] = useState([]);

  let timer: any;
  const performSearch = async () => {
    const tempString = await getFromStorage(STORAGE.searchParams);
    if (!tempString || !(typeof tempString === "string")) {
      return null;
    }
    const paramsString = JSON.parse(tempString);
    const formattedResponse = await executeSearch();
    setCentersList(formattedResponse);
    setShowLoader(false);
    if (paramsString.filters.notify) {
      startSearchService();
    }
  };
  useEffect(() => {
    performSearch();
    return () => {};
  }, []);

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
