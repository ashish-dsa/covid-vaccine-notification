import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { HelperText, Subheading, TextInput } from "react-native-paper";

export const PincodeSearch = ({ setPincodes }: { setPincodes: Function }) => {
  const [localPincodes, setLocalPincodes] = React.useState("");
  const hasErrors = () => {
    const correct = localPincodes.match(/^\d{6}(\s){0,1}(,(\s){0,1}\d{6}(\s){0,1})*$/);
    return !correct;
  };
  useEffect(() => {
    if (!hasErrors()) {
      setPincodes(localPincodes.trim());
    }
  }, [localPincodes]);
  return (
    <View style={styles.pincode}>
      <Subheading>Enter Pincodes</Subheading>
      <TextInput label="Example: 400001, 410200" value={localPincodes} onChangeText={text => setLocalPincodes(text)} />
      <HelperText type="error" visible={hasErrors()}>
        Pincode list is invalid
      </HelperText>
    </View>
  );
};
const styles = StyleSheet.create({
  pincode: {
    marginHorizontal: "6%",
  },
});
