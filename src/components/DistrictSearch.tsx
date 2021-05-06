import { STATES } from "constants/states";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { getRequest } from "services/httprequests";

const DISTRICT_URL = "https://cdn-api.co-vin.in/api/v2/admin/location/districts/";
export const DistrictSearch = ({ setDistrict }: { setDistrict: Function }) => {
  const [selectState, setSelectState] = useState(false);
  const [selectDistrict, setSelectDistrict] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);
  const [apiDistrict, setApiDistrict] = useState([]);
  const stateList = STATES.map((state, index) => {
    return { label: state.state_name, value: state.state_id };
  });
  useEffect(() => {
    apiDistrict.length = 0;
    setApiDistrict([]);
    setSelectDistrict(false);
    return () => {};
  }, [selectState]);
  const updateDistricts = async (value: any) => {
    if (value) {
      const districts: any = await getRequest(DISTRICT_URL + value.toString());
      if (districts && districts.data) {
        let districtList = [];
        for (let districtObject of districts.data.districts) {
          districtList.push({ label: districtObject.district_name, value: districtObject.district_id });
        }
        //@ts-ignore
        setApiDistrict(districtList);
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
      {apiDistrict.length > 0 ? (
        <DropDown
          label={"Select District"}
          mode={"outlined"}
          value={selectDistrict}
          setValue={(value: any) => {
            setDistrict(value);
            setSelectDistrict(value);
          }}
          list={apiDistrict}
          visible={showDistrictDropdown}
          showDropDown={() => setShowDistrictDropdown(true)}
          onDismiss={() => setShowDistrictDropdown(false)}
          inputProps={{
            right: <TextInput.Icon name={"menu-down"} />,
          }}
        />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  states: {
    marginHorizontal: "6%",
  },
});
