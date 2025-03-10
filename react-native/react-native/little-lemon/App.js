import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/parts/LittleLemonHeader";
import LittleLemonFooter from "./components/parts/LittleLemonFooter";
import MenuItems from "./screens/MenuItems";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <LoginScreen />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: {
    backgroundColor: "#495E57",
  },
});
