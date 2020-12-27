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

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingScreen' headerMode='none'>
      <Stack.Screen
          name= "Main"
          component= { LandingScreen }
          options= {{ title: null }}
        />
        <Stack.Screen
          name= "HomeScreen"
          component= { HomeScreen }
          options= {{ title: null }}
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
          options={({ route }) => ({ title: route.params.dutyName})}
        />
        <Stack.Screen
          name="AddDutyScreen"
          component={ AddDutyScreen }
          options={{ title: 'Time Task'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;