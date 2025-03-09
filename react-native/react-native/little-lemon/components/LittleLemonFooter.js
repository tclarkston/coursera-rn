import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

function LittleLemonFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.body}>
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}

export default LittleLemonFooter;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#EE9972",
    padding: 10,
    marginBottom: 10,
  },
  body: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
  },
});
