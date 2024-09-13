import { View, Text,TouchableOpacity,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import BusinessListItem from '../BusinessListByCategory/BusinessListItem';

export default function BookingScreen() {

  const {user}=useUser();
  const [loading,setLoading]=useState(false);
  const [BookingList,setBookingList]=useState([]);

useEffect(()=>{
  user&&getUserBooking();
},[user])

  const getUserBooking=()=>{
    setLoading(true);
    GlobalApi.getUserBooking(user.primaryEmailAddress.emailAddress).then(res=>{
      console.log('Res',res);
      setBookingList(res.bookings);
      setLoading(false);
    })
  }
  return (
    <View style={{ padding:20,paddingTop:30 }}>
      

     
      <Text style={{fontSize:20,fontFamily:'outfit-medium'}}>Bookings</Text>
      
      <View>
        <FlatList
        data={BookingList}
        onRefresh={()=>getUserBooking()}
        refreshing={loading}
        renderItem={({item,index})=>(
          <BusinessListItem business={item?.business}
          bookings={item}
          />
        )}
        />
      </View>
      
    </View>
  )
}