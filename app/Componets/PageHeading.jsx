import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


export default function PageHeading({title}) {
    const navigation=useNavigation();
  return (
    <View style={{ padding:20 }}>
    <TouchableOpacity style={{display: 'flex', flexDirection: 'row',gap:10}}
        onPress={()=>{navigation.goBack()}}
      >

      <Ionicons name="arrow-back" size={30} color="black" />
      <Text style={{fontSize:20,fontFamily:'outfit-medium'}}>{title}</Text>
      
      </TouchableOpacity>
    </View>
  )
}