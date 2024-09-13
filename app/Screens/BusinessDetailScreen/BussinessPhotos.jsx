import { View, Text,FlatList,Image,ScrollView } from 'react-native'
import React from 'react'

export default function BussinessPhotos({business}) {
  return (
    <View style={{ paddingHorizontal:20 }}>
      <Text style={{fontFamily:'outfit-medium',fontSize:25}}>Photo</Text>
      
      <FlatList
      data={business.image}
      renderItem={({item})=>(
        <Image source={{ uri:item.url }}
        style={{ width:'50%',flex:1,borderRadius:15,margin:7 ,height:120 }}
        />
        )}
        />

      
    </View>
  )
}