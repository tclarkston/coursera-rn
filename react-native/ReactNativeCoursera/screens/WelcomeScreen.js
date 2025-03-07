import * as React from "react";
import { ScrollView, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text
        style={{
          textAlign: "center",
          color: "#ffffff",
          fontSize: 40,
          paddingTop: 60,
        }}
      >
        Welcome to Little Lemon!
      </Text>
      <ScrollView indicatorStyle="white">
        <Text
          style={{
            paddingTop: 60,
            padding: 20,
            fontSize: 50,
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </ScrollView>
    </View>
  );
}
