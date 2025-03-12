import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import WelcomeScreen from '@/components/screens/WelcomeScreen';
import LoginScreen from '@/components/screens/LoginScreen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerStyle: { backgroundColor: "#FBDABB" } }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
