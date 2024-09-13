import { View, Text,Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function ProfileScreen() {

  const {user}=useUser();
  return (
    <View style={{ padding:20,paddingTop:30 }}>
      <Text style={{ fontFamily:'outfit-bold',fontSize:30 }}>Profile</Text>
      <View 
      style={{ display:'flex',alignItems:'center',padding:20,justifyContent:'center' }}
      >
        <Image source={{ uri:user.imageUrl }}
        style={{ height:90 ,width:90,borderRadius:99}}
        ></Image>
      </View>
    </View>
  )
}