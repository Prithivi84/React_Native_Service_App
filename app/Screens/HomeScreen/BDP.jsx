import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'

export default function BDP({business}) {
  
  const navigate=useNavigation();


  return (
    <TouchableOpacity onPress={()=>navigate.push('business-detail',{business:business})} style={styles.container}>
      <Image source={{uri:business?.image[0]?.url}}
      style={styles.image}
      ></Image>
      <View style={{paddingTop:5 }}>
        <Text style={{fontSize:17,fontFamily:'outfit-medium'}}>{business.name}</Text>
        <Text style={{fontSize:15,fontFamily:'outfit',color:'gray'}}>{business.contactPerson}</Text>
        <Text style={{
            fontSize:13,
            fontFamily:'outfit',
            padding:3,
            color:Colors.Primary,
            backgroundColor:Colors.Light,
            borderRadius:3,
            alignSelf:'flex-start',
            paddingHorizontal:10
            }}>{business.category.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:Colors.White,
        borderRadius:15
    },
    image:{
        width:160,
        height:100,
        borderRadius:20 
    }
})