import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen  from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen'
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome, Feather } from '@expo/vector-icons';
import Color from '../Utils/Colors'
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    // <View>
    //     <Text>Nav</Text>
    // </View>
    <Tab.Navigator screenOptions={{
        headerShown:false, 
        tabBarActiveTintColor:Color.Primary
        }}>
      <Tab.Screen name='home' component={HomeNavigation}
      options={{
        tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>Home</Text>),
        tabBarIcon:({color,size})=>(
            <Ionicons name="home" size={size} color={color} />
        )
      }}
      ></Tab.Screen>
      <Tab.Screen name="booking" component={BookingScreen}
      options={{
        tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>Booking</Text>),
        tabBarIcon:({color,size})=>(
            <FontAwesome name="bookmark" size={size} color={color} />
        )
      }}
      ></Tab.Screen>
      <Tab.Screen name="profile" component={ProfileScreen}
      options={{
        tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>Profile</Text>),
        tabBarIcon:({color,size})=>(
            <Feather name="user" size={size} color={color} />
        )
      }}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}