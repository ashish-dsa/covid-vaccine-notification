import { NavigationProp } from "@react-navigation/core";
import { DistrictSearch } from "components/DistrictSearch";
import { PincodeSearch } from "components/PincodeSearch";
import { PinDistrictToggle } from "components/PinDistrictToggle";
import { SearchFilters } from "components/SearchFilters";
import { SubmitSearch } from "components/SubmitSearch";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Appbar, withTheme } from "react-native-paper";
import { SEARCH_OPTIONS } from "./constants";

interface ISearchAndNotify {
  navigation: NavigationProp<any>;
  theme: ReactNativePaper.Theme;
}
const SearchAndNotify = ({ navigation, theme }: ISearchAndNotify) => {
  const [allChecked, setAllChecked] = React.useState(false);
  const [adultsChecked, setAdultsChecked] = React.useState(false);
  const [notifyChecked, setNotifyChecked] = React.useState(true);
  const [freeChecked, setFreeChecked] = React.useState(false);
  const [paidChecked, setPaidChecked] = React.useState(false);
  const [searchOption, setSearchOption] = useState(SEARCH_OPTIONS.district);
  const [pincodes, setPincodes] = useState(null);
  const [district, setDistrict] = useState(null);
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Search and Notify" subtitle="" />
      </Appbar.Header>
      <PinDistrictToggle searchOption={searchOption} setSearchOption={setSearchOption} />
      {searchOption === SEARCH_OPTIONS.pincode ? (
        <PincodeSearch setPincodes={setPincodes} />
      ) : (
        <DistrictSearch setDistrict={setDistrict} />
      )}
      <SearchFilters
        allChecked={allChecked}
        setAllChecked={setAllChecked}
        adultsChecked={adultsChecked}
        setAdultsChecked={setAdultsChecked}
        notifyChecked={notifyChecked}
        setNotifyChecked={setNotifyChecked}
        freeChecked={freeChecked}
        setFreeChecked={setFreeChecked}
        paidChecked={paidChecked}
        setPaidChecked={setPaidChecked}
      />
      <SubmitSearch
        allChecked={allChecked}
        adultsChecked={adultsChecked}
        notifyChecked={notifyChecked}
        searchType={searchOption}
        paidChecked={paidChecked}
        freeChecked={freeChecked}
        searchParams={searchOption === SEARCH_OPTIONS.pincode ? pincodes : district}
        navigation={navigation}
      />
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
