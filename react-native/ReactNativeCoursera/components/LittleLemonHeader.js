import * as React from "react";
import { Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View
      style={{ flex: 0.15, backgroundColor: "#F4CE14", alignItems: "center" }}
    >
      <Text style={{ padding: 50, fontSize: 30, color: "black" }}>
        Little Lemon
      </Text>
    </View>
  );
}
