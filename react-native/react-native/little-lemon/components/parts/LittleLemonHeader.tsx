import { View, Text, StyleSheet } from "react-native";

function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

export default LittleLemonHeader;

const styles = StyleSheet.create({
  container: {
    flex: .16,
    backgroundColor: '#EE9972',
    paddingTop: 10
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
