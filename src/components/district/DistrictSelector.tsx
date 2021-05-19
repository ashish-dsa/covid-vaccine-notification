import React, { useState } from "react";
import { Button, Caption, TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";

interface IDistrictSelector {
  setDistricts: Function;
  apiDistricts: Array<any>;
}

export const DistrictSelector = ({ setDistricts, apiDistricts }: IDistrictSelector) => {
  const [showDistrictDropdown1, setShowDistrictDropdown1] = useState(false);
  const [selectedDistrict1, setSelectedDistrict1] = useState(false);
  const [showDistrictDropdown2, setShowDistrictDropdown2] = useState(false);
  const [selectedDistrict2, setSelectedDistrict2] = useState(false);
  const [showAddButton, setShowAddButton] = useState(true);
  return (
    <>
      <DropDown
        label={"Select District"}
        mode={"outlined"}
        value={selectedDistrict1}
        setValue={(value: any) => {
          setSelectedDistrict1(value);
          setDistricts([value, selectedDistrict2]);
        }}
        list={apiDistricts}
        visible={showDistrictDropdown1}
        showDropDown={() => setShowDistrictDropdown1(true)}
        onDismiss={() => setShowDistrictDropdown1(false)}
        inputProps={{
          right: <TextInput.Icon name={"menu-down"} />,
        }}
      />
      {showAddButton ? (
        <Button icon="plus-circle-outline" onPress={() => setShowAddButton(false)}>
          <Caption>Click to add another district</Caption>
        </Button>
      ) : (
        <DropDown
          label={"Select District"}
          mode={"outlined"}
          value={selectedDistrict2}
          setValue={(value: any) => {
            setSelectedDistrict2(value);
            setDistricts([selectedDistrict1, value]);
          }}
          list={apiDistricts}
          visible={showDistrictDropdown2}
          showDropDown={() => setShowDistrictDropdown2(true)}
          onDismiss={() => setShowDistrictDropdown2(false)}
          inputProps={{
            right: <TextInput.Icon name={"menu-down"} />,
          }}
        />
      )}
    </>
  );
};
