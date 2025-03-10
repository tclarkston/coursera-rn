import { View, Text, StyleSheet } from "react-native";

function LittleLemonHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>Little Lemon</Text>
    </View>
  );
}

export default LittleLemonHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#EE9972",
  },
  heading: {
    paddingTop: 40,
    paddingBottom: 20,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
