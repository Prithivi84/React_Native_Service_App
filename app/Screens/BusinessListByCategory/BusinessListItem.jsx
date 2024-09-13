import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BusinessListItem({business,bookings}) {
  const navigation=useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() =>{navigation.push('business-detail',{business:business})}}>
      <Image source={{uri:business?.image[0]?.url}}
        style={styles.image}
      />
 
        <View style={styles.subContainer}>
            <Text style={{fontFamily:'outfit',color:'gray'}}>{business.contactPerson}</Text>
            <Text style={{fontFamily:'outfit-bold',fontSize:19}}>{business.name}</Text>
           {bookings?.id? 
           <Text style={{ backgroundColor:Colors.LightBackground,padding:3,borderRadius:5,fontSize:14,alignSelf:'flex-start' }}>
            {bookings?.bookingStatus}
           </Text>
           :<Text style={{fontFamily:'outfit-medium',fontSize:14}}>
            <Entypo name="location-pin" size={20} color="black" />{business.address}</Text>}
            {bookings?.id?<Text style={{ fontFamily:'outfit' }}><AntDesign name="calendar" size={24} color={Colors.Primary} /> {bookings?.date} at {bookings?.time}</Text>:null}
        </View>


    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({

    container:{
        padding:10,
        backgroundColor:Colors.White,
        borderRadius:15,
        marginBottom:15,
        display:'flex',
        flexDirection: 'row',
        gap:10
    },

    subContainer:{
      padding:4,
      display: 'flex',
      gap:7
    },
    image: {
        width: 100,
        height: 100,
        borderRadius:15
    }
})