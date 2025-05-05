import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsletterWelcomeScreen from "@/components/screens/NewsletterWelcomeScreen";
import SubscribeScreen from "@/components/screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={NewsletterWelcomeScreen} />
      <Stack.Screen name="Subscribe" component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
