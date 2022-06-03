import React, { Component } from 'react';
import {
    View,
    Text,
    Animated,
    Dimensions,
    StyleSheet,
    Image,
    Platform,
    TouchableOpacity,
} from 'react-native';
import Home from './Home';
import Explore from './Explore';
import AddBar from './AddBar';
import Notification from './Notification';
import Profile from './Profile';
import colors from '../assets/colors/colors';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useRef } from 'react';
import { Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import plus from '../assets/plus.png';

const Stack = createStackNavigator();


class MainComponents extends Component {
    render() {
        const Tab = createBottomTabNavigator();
        //const TabNavigator = () => {
        const tabOffsetValue = useRef(new Animated.Value(0)).current;
        //function TabNavigator () {
        
        return (
            <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.blue,
                inactiveTintColor: colors.gray,
                showLabel: false,
                style: { borderTopWidth: 0, elevation: 0 }
            }}
            screenOptions={{
                tabBarStyle: { 
                    position: 'absolute', 
                    backgroundColor: colors.whiteGray,
                bottom: -17,
                // Max Height...
                height: 70,
                // Shadow...
                shadowColor: colors.blue,
                shadowOpacity: 1,
                shadowOffset: {
                    width: 20,
                    height: 20
                },
                shadowRadius: 20,
                elevation: 20,
                paddingHorizontal: 20,
                borderTopWidth: 0,
                
                },
            }}>
            
                <Tab.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                    headerShown: false,
                    backgroundColor: colors.whiteGray,
                    tabBarIcon: ({color}) => (
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 15
                        }}>
                        <Feather name="home" size={22} color={color} />
                    </View>
                    ),
                    }}
                    listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                        toValue: 0,
                        useNativeDriver: true
                        }).start();
                    }
                    })}
                />

                <Tab.Screen 
                    name="Explore" 
                    component={Explore}
                    options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 15
                        }}>
                        <FontAwesome5 name="compass" size={23} color={color} />
                    </View>
                    ),
                    }}
                    listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                        toValue: getWidth() * 1.12,
                        useNativeDriver: true
                        }).start();
                    }
                    })}
                />

                <Tab.Screen 
                    name="AddBar" 
                    component={AddBar}
                    options={{
                    tabBarIcon: ({color}) => (
                    <TouchableOpacity>
                        <View style={{
                        width: 55,
                        height: 55,
                        backgroundColor: colors.blue,
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: Platform.OS == "android" ? 70 : 30,
                        // borderColor: "#fcfdfb",
                        // borderWidth: 3.4,
                        // outlineColor: "#523009",
                        // outlineStyle: "solid",
                        // outlineWidth: 3.4,
                        shadowColor: "#8261E0",
                        shadowOffset: {
                            width: 7,
                            height: 7,
                        },
                            shadowOpacity: 0.9,
                            shadowRadius: 9,
                            elevation: 10,
                        }}>
                        <Image source={plus} style={{
                            width: 17,
                            height: 17,
                            tintColor: 'white',
                        }}></Image>
                        </View>
                    </TouchableOpacity>
                    ),
                    }}
                />

                <Tab.Screen 
                    name="Notification" 
                    component={Notification}
                    options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 16,
                        }}>
                        <FontAwesome5 name="bell" size={21} color={color} />
                    </View>
                    ),
                    }}
                    listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                        toValue: getWidth() * 3.4,
                        useNativeDriver: true
                        }).start();
                    }
                    })}
                />

                <Tab.Screen 
                    name="Profile" 
                    component={Profile}
                    options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 14
                        }}>
                        <FontAwesome5 name="user" size={22} color={color} />
                    </View>
                    ),
                    }}
                    listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                        toValue: getWidth() * 4.5,
                        useNativeDriver: true
                        }).start();
                    }
                    })}
                />
            

                <Animated.View style={{
                    width: getWidth() - 25,
                    height: 3,
                    backgroundColor: colors.blue,
                    position: 'absolute',
                    bottom: 50,
                    // Horizontal Padding = 20...
                    left: 35,
                    borderRadius: 20,
                    transform: [
                    { translateX: tabOffsetValue }
                    ]
                }}>
                </Animated.View>
            </Tab.Navigator>
            // {/* 
            // <View style={styles.backgroundAdd}>
            //     <Image source={plus} style={{
            //         width: 17,
            //         height: 17,
            //         tintColor: 'white',
            //     }}></Image>
            //     </View>*/}
        );
    };
};

/*
const TabNavigator = () => {
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  </NavigationContainer>
}*/



function getWidth() {
    let width = Dimensions.get("window").width
    // Horizontal Padding = 20...
    width = width - 80
    // Total five Tabs...
    return width / 5
}

// const MyStack = () =>{
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Home"
//                 component={TabNavigator}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name="Profile"
//                 component={Profile}
//                 options={{ headerShown: false }}
//             />
//         </Stack.Navigator>
//     );
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteGray,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundAdd: {
        backgroundColor: '#8261E0',
        width: 75,
        height: 75,
        borderRadius: 50,
        opacity: 0.12,
        position: 'absolute',
        margin: 159,
        marginTop: 711,
    },
});

export default MainComponents2;