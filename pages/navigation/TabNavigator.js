import React from 'react';
import { View, Text } from 'react-native'
import { Svg, Path } from 'react-native-svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../screens/Tab_Navigation/HomeScreen";
import Account from "../screens/Tab_Navigation/Account";
import Diagnose from "../screens/Tab_Navigation/DiagnoseScreen";
import My_plants from "../screens/Tab_Navigation/My plants";
import Camera from '../screens/Tab_Navigation/CameraScreen';

import Logo from "../components/logo/LogoLight";
import NavBar from '../components/Nav_Bar/HomeNavBar';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#00a86b",
        tabBarInactiveTintColor: "#9e9e9e",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: '',
          headerLeft: (props) => <Logo {...props} />,
          headerRight: (props) => <NavBar {...props} />,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M9.07861 16.1357H14.8936"
                stroke={focused ? "#00a86b" : "#212121"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.3999 13.713C2.3999 8.082 3.0139 8.475 6.3189 5.41C7.7649 4.246 10.0149 2 11.9579 2C13.8999 2 16.1949 4.235 17.6539 5.41C20.9589 8.475 21.5719 8.082 21.5719 13.713C21.5719 22 19.6129 22 11.9859 22C4.3589 22 2.3999 22 2.3999 13.713Z"
                stroke={focused ? "#00a86b" : "#212121"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          ),
        }}
      />

      {/* Diagnose */}
      <Tab.Screen
        name="Diagnose"
        component={Diagnose}
        options={{
          tabBarLabel: "Diagnose",
          tabBarIcon: ({ focused }) =>
            <Svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path
                fill={focused ? "#00a86b" : "#212121"}

                d="M7.76175 13.1207C7.90275 13.2617 8.09375 13.3407 8.29275 13.3407C8.49175 13.3407 8.68275 13.2617 8.82275 13.1207L12.7208 9.22167C13.0138 8.92867 13.0138 8.45367 12.7208 8.16067C12.4278 7.86767 11.9538 7.86767 11.6608 8.16067L8.29275 11.5287L6.93175 10.1657C6.63875 9.87267 6.16275 9.87267 5.87075 10.1657C5.57775 10.4577 5.57775 10.9337 5.86975 11.2267L7.76175 13.1207Z" />
              <Path
                fill={focused ? "#00a86b" : "#212121"}

                fill-rule="evenodd" clip-rule="evenodd" d="M0.578016 11.7003C0.578016 18.3973 6.06302 21.1773 9.00002 21.1773C11.937 21.1773 17.422 18.3973 17.422 11.7003C17.422 9.80636 17.4464 8.42966 17.4643 7.41539L17.4651 7.37061C17.511 4.83362 17.5206 4.30387 16.866 3.64927C16.034 2.81727 12.59 0.822266 9.00002 0.822266C5.40902 0.822266 1.96602 2.81727 1.13602 3.64927C0.479411 4.30387 0.489004 4.83463 0.534933 7.37568L0.535716 7.41982C0.553657 8.43315 0.578016 9.80899 0.578016 11.7003ZM2.19702 4.71027C2.68202 4.22327 5.73402 2.32227 9.00002 2.32227C12.266 2.32227 15.319 4.22327 15.805 4.71027C15.997 4.90227 16.004 5.22027 15.966 7.34727C15.947 8.37327 15.922 9.76827 15.922 11.7003C15.922 17.7873 10.848 19.6773 9.00002 19.6773C7.15202 19.6773 2.07802 17.7873 2.07802 11.7003C2.07802 9.79991 2.05373 8.41737 2.03579 7.39658L2.03502 7.35227C1.99602 5.22127 2.00302 4.90227 2.19702 4.71027Z" />
            </Svg>

        }}
      />

      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarLabel: "",
          tabBarIcon: () =>
            <View className="bg-emerald-600 rounded-full w-[50px] h-[50px] flex justify-center items-center">
              <Svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.4385 12.4978C15.4385 10.761 14.0301 9.35254 12.2932 9.35254C10.5564 9.35254 9.14795 10.761 9.14795 12.4978C9.14795 14.2346 10.5564 15.6431 12.2932 15.6431C14.0301 15.6431 15.4385 14.2346 15.4385 12.4978Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.2927 20.2002C20.338 20.2002 21.2959 17.7897 21.2959 12.5665C21.2959 8.90545 20.8117 6.94651 17.7622 6.1044C17.4822 6.01598 17.1717 5.84756 16.9201 5.57072C16.5138 5.12545 16.2169 3.75809 15.2359 3.3444C14.2548 2.93177 10.3148 2.95072 9.34955 3.3444C8.38534 3.73914 8.07166 5.12545 7.66534 5.57072C7.41376 5.84756 7.10429 6.01598 6.82324 6.1044C3.77376 6.94651 3.28955 8.90545 3.28955 12.5665C3.28955 17.7897 4.24745 20.2002 12.2927 20.2002Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M17.2045 9H17.2135" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </Svg>
            </View>,
          headerShown: false
        }}
      />

      <Tab.Screen
        name="My_plants"
        component={My_plants}
        options={{
          tabBarLabel: "My_plants",
          tabBarIcon: ({ focused }) => (
            <Svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path
                stroke={focused ? "#00a86b" : "#212121"}
                fill={focused ? "#00a86b" : "#212121"}
                d="M15.7499 11.5H8.55929L8.7796 11.2797L10.6602 9.39907C11.4198 9.78159 12.2567 9.98553 13.1071 9.99531C13.9631 9.99757 14.803 9.76334 15.5343 9.31844C17.758 7.97219 18.9496 4.85594 18.7218 0.98219C18.7111 0.798707 18.6334 0.625547 18.5034 0.495584C18.3734 0.365622 18.2003 0.287905 18.0168 0.27719C14.143 0.0503151 11.0268 1.24094 9.68054 3.46469C8.80304 4.91313 8.78054 6.6625 9.59898 8.33969L8.24992 9.68875L7.10523 8.54407C7.66773 7.30188 7.62742 6.01281 6.97492 4.93656C5.95585 3.25 3.6196 2.35094 0.724602 2.52063C0.541438 2.53154 0.368628 2.60922 0.238882 2.73897C0.109135 2.86872 0.0314538 3.04153 0.0205399 3.22469C-0.150085 6.11875 0.749915 8.455 2.43741 9.475C3.00197 9.81972 3.65094 10.0014 4.31242 10C4.91252 9.99405 5.50444 9.86013 6.04866 9.60719L7.18866 10.75L6.43866 11.5H2.24991C2.051 11.5 1.86024 11.579 1.71958 11.7197C1.57893 11.8603 1.49991 12.0511 1.49991 12.25C1.49991 12.4489 1.57893 12.6397 1.71958 12.7803C1.86024 12.921 2.051 13 2.24991 13H3.14898L4.38741 18.5753C4.46001 18.9092 4.64506 19.2081 4.91162 19.4219C5.17817 19.6358 5.51007 19.7516 5.85179 19.75H12.149C12.4907 19.7516 12.8226 19.6358 13.0891 19.4219C13.3557 19.2081 13.5408 18.9092 13.6134 18.5753L14.8518 13H15.7499C15.9488 13 16.1396 12.921 16.2802 12.7803C16.4209 12.6397 16.4999 12.4489 16.4999 12.25C16.4999 12.0511 16.4209 11.8603 16.2802 11.7197C16.1396 11.579 15.9488 11.5 15.7499 11.5ZM10.9687 4.24188C11.9493 2.62375 14.2724 1.71063 17.2499 1.75094C17.2884 4.73313 16.3771 7.05532 14.759 8.03219C13.6799 8.68844 12.3777 8.64532 11.0765 7.92157C10.3518 6.625 10.3124 5.32094 10.9687 4.24188ZM5.63523 8.13531C4.77273 8.5975 3.91866 8.61907 3.21366 8.19157C2.13554 7.53813 1.51398 5.99782 1.49991 4C3.49773 4.01407 5.03898 4.63563 5.69148 5.71375C6.11898 6.41875 6.09367 7.27282 5.63523 8.13531ZM12.149 18.25H5.85179L4.68742 13H13.3124L12.149 18.25Z" />
            </Svg>
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ focused }) => (

            <Svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path
                stroke={focused ? "#00a86b" : "#212121"}
                fill-rule="evenodd" clip-rule="evenodd" d="M7.88902 10.6188H7.92102C10.849 10.6188 13.23 8.23776 13.23 5.30976C13.23 2.38176 10.849 -0.000244141 7.92102 -0.000244141C4.99202 -0.000244141 2.61002 2.38176 2.61002 5.30676C2.60002 8.22676 4.96702 10.6098 7.88902 10.6188ZM4.03802 5.30976C4.03802 3.16876 5.78002 1.42776 7.92102 1.42776C10.061 1.42776 11.802 3.16876 11.802 5.30976C11.802 7.44976 10.061 9.19176 7.92102 9.19176H7.89202C5.76002 9.18376 4.03102 7.44376 4.03802 5.30976Z" fill="#212121" />
              <Path
                stroke={focused ? "#00a86b" : "#212121"}
                fill-rule="evenodd" clip-rule="evenodd" d="M0 16.1731C0 19.8701 5.962 19.8701 7.921 19.8701C11.32 19.8701 15.84 19.4891 15.84 16.1931C15.84 12.4961 9.88 12.4961 7.921 12.4961C4.521 12.4961 0 12.8771 0 16.1731ZM1.5 16.1731C1.5 14.7281 3.66 13.9961 7.921 13.9961C12.181 13.9961 14.34 14.7351 14.34 16.1931C14.34 17.6381 12.181 18.3701 7.921 18.3701C3.66 18.3701 1.5 17.6311 1.5 16.1731Z" fill="#212121" />
            </Svg>
          ),
          // tabBarBadge: "3"
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
