import { NavigationProp } from "@react-navigation/core";
import { MainOptions } from "components/options";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Appbar, withTheme } from "react-native-paper";

interface IHome {
  navigation: NavigationProp<any>;
  theme: ReactNativePaper.Theme;
}
const Home = ({ navigation, theme }: IHome) => {
  return (
    <SafeAreaView style={{ ...styles.backgroundStyle, backgroundColor: theme.colors.surface }}>
      <Appbar.Header>
        <Appbar.Content title="Covid Vaccination" subtitle="" />
      </Appbar.Header>
      <MainOptions navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: "100%",
  },
});

export default withTheme(Home);
