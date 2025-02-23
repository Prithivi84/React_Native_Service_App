import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Category from './Category'
import BusinessList from './BusinessList'


export default function HomeScreen() {
    
  return (
    <View >
      <Header></Header>
      <View style={{padding:20}}>
      <Slider></Slider>
      <Category></Category>
      <BusinessList></BusinessList>
      </View>
    </View>
  )
}