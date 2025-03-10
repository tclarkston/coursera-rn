import * as React from "react";
import { ScrollView, Text, StyleSheet, TextInput } from "react-native";

function WelcomeScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <ScrollView style={styles.container} indicatorStyle={"white"}>
      <Text style={styles.heading}>Welcome to Little Lemon</Text>
      <Text style={styles.body}>Login to Continue</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
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
    padding: 30,
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
