import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'

import MainComponents from './components/MainComponents';
import Home from './components/Home';
import Task from './components/AddBar';
import Detail from './components/Details'
export default class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      // <MainComponents/>
      <NavigationContainer>
        <StatusBar barStyle='dark-content' />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen 
            name= 'Main' 
            component={MainComponents} 
            options={{headerShown: false}}
          /> */}
          <Stack.Screen 
            name= 'Dashboard' 
            component={Home} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name= 'Detail' 
            component={Detail} 
            options={{
              headerShown: true
            }}
          />
          <Stack.Screen 
            name= 'AddBar' 
            component={Task} 
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}