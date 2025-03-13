import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '@/components/screens/LoginScreen';
import WelcomeScreen from '@/components/screens/WelcomeScreen';
import { StyleSheet, View } from 'react-native';
import LittleLemonHeader from '@/components/sections/LittleLemonHeader';
import LittleLemonFooter from '@/components/sections/LittleLemonFooter';

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen name="Welcome" component={WelcomeScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
        </Drawer.Navigator>
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