import { View, Text,TouchableOpacity,FlatList, StyleSheet, TextInput, ScrollView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeading from '../../Componets/PageHeading'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from "react-native-calendar-picker";
import Colors from '../../Utils/Colors';
import { KeyboardAvoidingView } from 'react-native';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import moment from 'moment';


export default function BussinessModal({businessId,modalView}) {
    const navigation=useNavigation();

    const [selectTime, setSelectTime]=useState();
    const [selectDate, setSelectDate]=useState();
    const [timeList,setTimeList]=useState([]);
    const [note,setNote]=useState();
    const {user}=useUser();
   useEffect(()=>{
    getTime();
   },[])



 
    const getTime=()=>{
      const timeList=[];
      for(let i=8;i<=12;i++){
        timeList.push({time:i+":00 AM"})
        timeList.push({time:i+":30 AM"})
      }
      for(let i=2;i<=7;i++){
        timeList.push({time:i+":00 PM"})
        timeList.push({time:i+":30 PM"})
      }
      setTimeList(timeList);
    }


    // Create Booking Method
    const createNewBooking=()=>{
      if(!selectDate||!selectTime){
        ToastAndroid.show('Please select date and time',ToastAndroid.LONG)
        return;
      }
      const data={
        userName:user?.fullName,
        userEmail:user?. primaryEmailAddress.emailAddress,
        time:selectTime,
        date:moment(selectDate).format('DD-MMM-YYYY'),
        // note:note,
        businessId:businessId
      } 
      GlobalApi.createBooking(data).then(res=>{
        console.log("res",res)
        console.log(data.businessId," ",data.userEmail," ",data.userName );
        ToastAndroid.show('Booking Created Successfully!',ToastAndroid.LONG)
        modalView();
      })
    }

  return (
    <ScrollView>
    <KeyboardAvoidingView style={{ padding:20 }} >
       <View>
    <TouchableOpacity style={{display: 'flex', flexDirection: 'row',gap:10}}
        onPress={()=>{modalView()}}
      >

      <Ionicons name="arrow-back" size={30} color="black" />
      <Text style={{fontSize:20,fontFamily:'outfit-medium'}}>Booking</Text>
      
      </TouchableOpacity>
    </View>
    <View style={{ paddingHorizontal:10 ,marginTop:5}}>

      <Text style={{ fontFamily:'outfit-medium',fontSize:20 }}>Select Date</Text>
    </View>
    <View style={{ backgroundColor:Colors.LightBackground,padding:20,borderRadius:15,marginVertical:10 }}>
    <CalendarPicker onDateChange={setSelectDate} 
    width={340}
    minDate={Date.now()}
    todayBackgroundColor={Colors.Primary}
    todayTextStyle={{ color:Colors.White }}
    selectedDayColor={Colors.Light}
    selectedDayTextColor={Colors.Black}
    
    
    />

    </View>
    <View style={{ padding:5 }}>
      <Text style={{ fontFamily:'outfit-medium',fontSize:20 }}>Select Time</Text>
      <FlatList
      data={timeList}
      horizontal
      style={{ marginVertical:10 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <TouchableOpacity style={{ marginRight:10}}>
         
          <Text onPress={()=>{setSelectTime(item.time);console.log("click")}} style={[selectTime==item.time?styles.unSelectedTime:styles.selectedTime]}>{item.time}</Text>
        </TouchableOpacity>
      )}
      />
    </View>

    <View style={{ padding:5 }}>
    <Text style={{ fontFamily:'outfit-medium',fontSize:20 }}>Any Suggestion Notes</Text>
    <TextInput
    numberOfLines={4}
    multiline={true}
    placeholder='Notes'
    style={ styles.Notes }
    onChange={(text)=>setNote(text)}
    >

    </TextInput>
    <TouchableOpacity onPress={()=>createNewBooking()}>
        <Text style={styles.btn}>Confirm & Book</Text>
    </TouchableOpacity>
    </View>
    
    </KeyboardAvoidingView>
    </ScrollView>
  )
}


const styles=StyleSheet.create({
  selectedTime:{
    paddingHorizontal:20,paddingVertical:10,borderColor:Colors.Primary,borderWidth:2,borderRadius:15,color:Colors.Primary
  },
  unSelectedTime:{
    paddingHorizontal:20,paddingVertical:10,borderColor:Colors.Primary,borderWidth:2,borderRadius:15,color:Colors.White,backgroundColor:Colors.Primary
  },
  Notes:{
    borderWidth:2,borderColor:Colors.LightBackground,borderRadius:15,textAlignVertical:'top',padding:20,fontSize:16,fontFamily:'outfit',marginVertical:10
  },
  btn:{
    padding:13,
    backgroundColor:Colors.Primary,
    color:Colors.White,
    textAlign:'center',
    borderRadius:20,
    fontSize:20,
    fontFamily:'outfit'
  }
})