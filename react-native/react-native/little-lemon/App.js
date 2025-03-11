import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/parts/LittleLemonHeader';
import LittleLemonFooter from './components/parts/LittleLemonFooter';
import MenuItems from './components/screens/MenuItems';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <MenuItems />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});