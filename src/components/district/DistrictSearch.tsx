import { STATES } from "constants/states";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { getRequest } from "services/httprequests";
import { DistrictSelector } from "./DistrictSelector";

const DISTRICT_URL = "https://cdn-api.co-vin.in/api/v2/admin/location/districts/";
export const DistrictSearch = ({ setDistricts }: { setDistricts: Function }) => {
  const [selectState, setSelectState] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [apiDistricts, setapiDistricts] = useState([]);
  const stateList = STATES.map((state, index) => {
    return { label: state.state_name, value: state.state_id };
  });
  useEffect(() => {
    apiDistricts.length = 0;
    setapiDistricts([]);
    return () => {};
  }, [selectState]);
  const updateDistricts = async (stateValue: any) => {
    if (stateValue) {
      const resultDistricts: any = await getRequest(DISTRICT_URL + stateValue.toString());
      if (resultDistricts && resultDistricts.data) {
        let districtList = [];
        for (let districtObject of resultDistricts.data.districts) {
          districtList.push({ label: districtObject.district_name, value: districtObject.district_id });
        }
        //@ts-ignore
        setapiDistricts(districtList);
      }
    }
  };
  return (
    <View style={styles.states}>
      <DropDown
        label={"Select State"}
        mode={"outlined"}
        value={selectState}
        setValue={(value: any) => {
          setSelectState(value);
          updateDistricts(value);
        }}
        list={stateList}
        visible={showStateDropdown}
        showDropDown={() => setShowStateDropdown(true)}
        onDismiss={() => setShowStateDropdown(false)}
        inputProps={{
          right: <TextInput.Icon name={"menu-down"} />,
        }}
      />
      {apiDistricts.length > 0 ? <DistrictSelector setDistricts={setDistricts} apiDistricts={apiDistricts} /> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  states: {
    marginHorizontal: "6%",
  },
});
