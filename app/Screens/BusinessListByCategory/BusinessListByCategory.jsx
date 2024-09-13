import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi'
import BusinessListItem from './BusinessListItem';
import Colors from '../../Utils/Colors';

export default function BusinessListByCategory() {

  const navigation=useNavigation();
const [businessList, setBusinessList]=useState([])

  const param=useRoute().params;
  useEffect(()=>{
    console.log("Category", param.category);
    param&&getBusinessListByCategory()
  },[param])

  const getBusinessListByCategory=() => {
    GlobalApi.getBusinessList(param.category)
    .then(res=>{
      console.log(res.businesses);
      setBusinessList(res.businesses);
    })
  }

  return (
    <View style={{padding:20,paddingTop:40}}>
      <TouchableOpacity style={{display: 'flex', flexDirection: 'row',gap:10}}
        onPress={()=>{navigation.goBack()}}
      >

      <Ionicons name="arrow-back" size={30} color="black" />
      <Text style={{fontSize:20,fontFamily:'outfit-medium'}}>{param.category}</Text>
      
      </TouchableOpacity>

      {businessList?.length>0? <FlatList 
       data={businessList}
       style={{marginTop:15}}
       renderItem={({item,index}) =>(
        <BusinessListItem business={item}/>
       )}
      />:<Text style={{fontSize:20,fontFamily:'outfit-medium',textAlign:'center',padding:'20%',color:'gray'}}>No business list</Text>}
    </View>
  )
}