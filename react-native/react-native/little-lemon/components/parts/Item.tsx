import { View, Text, StyleSheet } from "react-native";


const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.idText}>{price}</Text>
  </View>
);

export default Item;

const menuStyles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  itemText: {
    flex: 1,
    color: "#F4CE14",
    fontSize: 24,
  },
  idText: {
    color: "#F4CE14",
    fontSize: 24,
  },
});
