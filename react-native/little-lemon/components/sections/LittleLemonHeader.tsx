import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface LittleLemonHeaderProps {
  headerText: string;
};


const LittleLemonHeader = ({ headerText }: LittleLemonHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{headerText}</Text>
    </View>
  );
}

export default LittleLemonHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#EE9972',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
