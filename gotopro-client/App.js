import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './src/screens/LandingScreen';
import HomeScreen from './src/screens/HomeScreen';
import TodayDutyScreen from './src/screens/TodayDutyScreen';
import DutyTypeScreen from './src/screens/DutyTypeScreen';
import DutyDetailScreen from './src/screens/DutyDetailScreen';
import AddDutyScreen from './src/screens/AddDutyScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import LoadingScreen from './src/screens/LoadingScreen';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="LoadingScreen" 
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },
        }}
      >
        <Stack.Screen
          name= "LoadingScreen"
          component= { LoadingScreen }
          options= {{ title: null, header: () => null, }}
        />
        <Stack.Screen
          name= "Main"
          component= { LandingScreen }
          options= {{ title: null, header: () => null, }}
        />
        <Stack.Screen
          name= "LoginScreen"
          component= { LoginScreen }
          options= {{ title: null }}
        />
        <Stack.Screen
          name= "RegisterScreen"
          component= { RegisterScreen }
          options= {{ title: null }}
        />
        <Stack.Screen
          name= "ForgotPasswordScreen"
          component= { ForgotPasswordScreen }
          options= {{ title: null }}
        />
        <Stack.Screen
          name= "HomeScreen"
          component= { HomeScreen }
          options= {{ title: null, header: () => null, }}
        />
        <Stack.Screen
          name="TodayDutyScreen"
          component={ TodayDutyScreen }
          options={{ title: null}}
        />
        <Stack.Screen
          name="DutyTypeScreen"
          component={ DutyTypeScreen }
          options={{ title: 'Tạo mục tiêu mới'}}
        />
        <Stack.Screen
          name="DutyDetailScreen"
          component={ DutyDetailScreen }
          options={({ route }) => ({ title: route.params.duty.dutyName})}
        />
        <Stack.Screen
          name="AddDutyScreen"
          component={ AddDutyScreen }
          options={{ title: 'Tạo mới mục tiêu'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;