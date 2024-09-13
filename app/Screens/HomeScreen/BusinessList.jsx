import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import BDP from './BDP';

export default function BusinessList() {

    const [businessList, setBusinessList]=useState([]);

    useEffect(()=>{
        getBusinessList();
    },[])

    const getBusinessList=()=>{
        GlobalApi.getBusiness().then(res=>{
            console.log(res);
            setBusinessList(res.businesses);
        })
    }


  return (
    <View style={{marginTop:10}}>
      <Text style={styles.heading}>BusinessList</Text>
      <FlatList 
      data={businessList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index}) =>(
        <View style={{marginRight:10}}>
            <BDP business={item}></BDP>
        </View>
      )}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        fontFamily:'outfit-medium',
        marginBottom:10
    },
})