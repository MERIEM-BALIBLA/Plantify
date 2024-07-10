import React, { useState, useEffect } from "react";
import { useFonts } from 'expo-font';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/WelcomeScreen";

// Authentication screens
import SignUpScreen from "./screens/Auth/SignUpScreen";
import LoginScreen from "./screens/Auth/LoginScreen";

// Forgot pass word screens
import Forgot_password from "./screens/forgot_password/Forgot_pass";
import OTP_code from "./screens/forgot_password/OTP_code";

// Stack navigation
import NotificationScreen from "./screens/Stack_Navigation/NotificationsScreen";
import BookmarksScreen from "./screens/Stack_Navigation/BookmarksScreen";
import ArticleDetailScreen from "./screens/Stack_Navigation/Article Detail Screen";
import Popular_Plants_Screen from "./screens/Stack_Navigation/Popular Plants Screen";
import Ask_Plant_Expert from "./screens/Stack_Navigation/Ask Plant Expert";

// Loading screen
import LoadingScreen from "./screens/LoadingScreen";

// Logo
import Logo from "./components/logo/LogoLight"
import NavBar from "./components/Nav_Bar/Navbar";

// icons
import Params from "./components/icons/params"
import Search from "./components/icons/search"
import Reload from "./components/icons/reload"
import Share from "./components/icons/share"
import Bookmarks from "./components/icons/bookmark"


// Search components
import SearchScreen from "./screens/SearchScreen";
import SearchBar from "./components/search/Search bar";

// Tab navigation
import HomeTabNavigator from "./navigation/TabNavigator"

import { View } from "react-native"
import ChatScreen from "./screens/Stack_Navigation/ChatScreen";
import CameraScreen from "./screens/Tab_Navigation/CameraScreen";

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

        <Stack.Screen name="login" component={LoginScreen}
          options={{
            headerTitle: '',
            headerRight: (props) => <Logo {...props} />,
          }} />
        <Stack.Screen name="signup" component={SignUpScreen}
          options={{
            headerTitle: '',
            headerRight: (props) => <Logo {...props} />,
          }} />
        <Stack.Screen name="forgot_password" component={Forgot_password}
          options={{
            headerTitle: '',
            headerRight: (props) => <Logo {...props} />,
          }} />
        <Stack.Screen name="Otp_code" component={OTP_code}
          options={{
            headerTitle: '',
            headerRight: (props) => <Logo {...props} />,
          }} />

        <Stack.Screen name="notification" component={NotificationScreen}
          options={{
            headerTitle: 'Notification',
            headerTitleAlign: 'center',
            headerRight: (props) => <NavBar component={<Params />} />,
          }} />
        <Stack.Screen name="bookmarks" component={BookmarksScreen}
          options={{
            headerTitle: 'My Bookmarks',
            headerTitleAlign: 'center',
            headerRight: (props) => <NavBar component={<Search />} />,

          }} />

        <Stack.Screen name="chat_with_expert" component={ChatScreen}
        />

        <Stack.Screen name="CameraScreen" component={CameraScreen}
          options={{ headerShown: false }} 
          />

        <Stack.Screen name="Detail" component={ArticleDetailScreen}
          options={{
            headerTitle: 'Article',
            headerTitleAlign: 'center',
            headerRight: (props) => <View >
              <View>
                <NavBar component={<Share />} />
              </View>
              <View >
                <NavBar component={<Bookmarks />} />
              </View>
            </View>
          }}
        />
        <Stack.Screen name="popular Plants list" component={Popular_Plants_Screen}
          options={{
            headerTitle: 'Popular Plants list',
            headerTitleAlign: 'center',
          }} />
        <Stack.Screen name="Ask Plant Expert" component={Ask_Plant_Expert}
          options={{
            headerTitle: 'Ask Plant Expert',
            headerTitleAlign: 'center',
            headerRight: (props) => <NavBar component={<Reload />} />,
          }} />
        <Stack.Screen name="Search plants" component={SearchScreen}
          options={{
            headerTitle: '',
            headerRight: (props) => <SearchBar {...props} />,
          }} />


        <Stack.Screen name="HomeTabs" component={HomeTabNavigator} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

