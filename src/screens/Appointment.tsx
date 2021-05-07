import { NavigationProp } from "@react-navigation/native";
import React, { useRef } from "react";
import { Appbar, withTheme } from "react-native-paper";
import WebView from "react-native-webview";

interface IAppointment {
  navigation: NavigationProp<any>;
  theme: ReactNativePaper.Theme;
}
const Appointment = ({ navigation, theme }: IAppointment) => {
  const webViewRef = useRef(null);

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Vaccination Appointment" subtitle="" />
      </Appbar.Header>
      <WebView
        source={{ uri: "https://selfregistration.cowin.gov.in/" }}
        incognito={true}
        javaScriptEnabled={true}
        //@ts-ignore
        ref={ref => (webViewRef.current = ref)}
      />
    </>
  );
};

export default withTheme(Appointment);
