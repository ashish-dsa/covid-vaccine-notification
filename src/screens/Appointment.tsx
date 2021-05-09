import { NavigationProp } from "@react-navigation/native";
import { javascriptToInject } from "constants/javascriptToInject";
import React, { useRef } from "react";
import { Appbar, withTheme } from "react-native-paper";
import WebView from "react-native-webview";
import logErrorToMyService from "services/reporting";

interface IAppointment {
  navigation: NavigationProp<any>;
  theme: ReactNativePaper.Theme;
}
const Appointment = ({ navigation, theme }: IAppointment) => {
  const webViewRef = useRef(null);

  const onNavigationStateChange = (navState: any) => {
    webViewRef.current.injectJavaScript(javascriptToInject);
  };
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
        onNavigationStateChange={onNavigationStateChange}
        onError={syntheticEvent => {
          const { nativeEvent } = syntheticEvent;
          logErrorToMyService("WebView error: " + JSON.stringify(nativeEvent));
        }}
        startInLoadingState={true}
        //@ts-ignore
        ref={ref => (webViewRef.current = ref)}
      />
    </>
  );
};

export default withTheme(Appointment);
