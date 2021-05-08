import { NavigationProp } from "@react-navigation/core";
import { DistrictSearch } from "components/DistrictSearch";
import { PincodeSearch } from "components/PincodeSearch";
import { PinDistrictToggle } from "components/PinDistrictToggle";
import { SearchFilters } from "components/SearchFilters";
import { SubmitSearch } from "components/SubmitSearch";
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Appbar, withTheme } from "react-native-paper";
import { SEARCH_OPTIONS } from "./constants";
import { IFilters } from "./models";

interface ISearchAndNotify {
  navigation: NavigationProp<any>;
  theme: ReactNativePaper.Theme;
}

const defaultFilters: IFilters = {
  senior: false,
  adult: true,
  free: true,
  paid: true,
  covishield: true,
  covaxin: true,
  notify: true,
};
const SearchAndNotify = ({ navigation, theme }: ISearchAndNotify) => {
  const [searchOption, setSearchOption] = useState(SEARCH_OPTIONS.district);
  const [pincodes, setPincodes] = useState(null);
  const [districts, setDistricts] = useState(null);
  const [filters, setFilters] = useState(defaultFilters);
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Search and Notify" subtitle="" />
      </Appbar.Header>
      <ScrollView>
        <PinDistrictToggle searchOption={searchOption} setSearchOption={setSearchOption} />
        {searchOption === SEARCH_OPTIONS.pincode ? (
          <PincodeSearch setPincodes={setPincodes} />
        ) : (
          <DistrictSearch setDistricts={setDistricts} />
        )}
        <SearchFilters filters={filters} setFilters={setFilters} />
        <SubmitSearch
          filters={filters}
          searchParams={searchOption === SEARCH_OPTIONS.pincode ? pincodes : districts}
          navigation={navigation}
          searchType={searchOption}
        />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  base: {
    height: "10%",
    flexDirection: "row",
    justifyContent: "center",
  },
  rightButton: {
    marginVertical: "5%",
    paddingRight: "12%",
  },
  leftButton: {
    marginVertical: "5%",
    paddingLeft: "12%",
  },
  pincode: {
    marginHorizontal: "6%",
  },
});
export default withTheme(SearchAndNotify);
