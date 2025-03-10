import * as React from "react";
import { ScrollView, Text, StyleSheet, TextInput } from "react-native";

function WelcomeScreen() {
  const [firstName, setFirsttName] = React.useState("");
  
  return (
    <ScrollView style={styles.container} indicatorStyle={"white"}>
      <Text style={styles.heading}>Welcome to Little Lemon</Text>
      <Text style={styles.body}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us! Little Lemon is a charming
        neighborhood bistro that serves simple food and classic cocktails in a
        lively but casual environment. We would love to hear more about your
        experience with us!
      </Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChange={setFirsttName}
        placeholder="First Name"
      />
    </ScrollView>
  );
}

export default WelcomeScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    paddingTop: 30,
    fontSize: 40,
    color: "#EDEFEE",
    textAlign: "center",
  },
  body: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
    borderRadius: 10,
  },
});
