import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import SignUpScreen from "./screens/Auth/SignUpScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import Forgot_password from "./screens/forgot_password/Forgot_pass";

import LoadingScreen from "./screens/LoadingScreen";

import Logo from "./components/logo/LogoLight"


export default function App() {
  const Stack = createNativeStackNavigator();


  const [fontsLoaded] = useFonts({
    'Urbanist': require('../assets/fonts/Urbanist-VariableFont_wght.ttf'),
  });

  // Loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  // ----

  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          {/* <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }} /> */}
          <Stack.Screen name="login" component={LoginScreen}
            options={{
              headerTitle: '',
              headerRight: (props) => <Logo {...props} />,
              headerStyle: {
                padding: 4
              }
            }} />
          <Stack.Screen name="signup" component={SignUpScreen}
            options={{
              headerTitle: '',
              headerRight: (props) => <Logo {...props} />,
              headerStyle: {
                borderBottomWidth: 0, // Remove bottom border
                shadowOpacity: 0,     // Remove shadow on iOS
                elevation: 0,         // Remove shadow on Android
                padding: 4
              },
            }} />
          <Stack.Screen name="forgot_password" component={Forgot_password}
            options={{
              headerTitle: '',
              headerRight: (props) => <Logo {...props} />,

              headerStyle: {
                borderBottomWidth: 0, // Remove bottom border
                shadowOpacity: 0,     // Remove shadow on iOS
                elevation: 0,         // Remove shadow on Android
                padding: 4
              },
            }} />

        </Stack.Navigator>
      </NavigationContainer>

  );
}

