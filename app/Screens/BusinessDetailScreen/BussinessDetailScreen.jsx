import { View, Text,TouchableOpacity, Image,Modal} from 'react-native'
import { ScrollView } from 'react-native'

import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import BussinessPhotos from './BussinessPhotos';
import PageHeading from '../../Componets/PageHeading';
import BussinessModal from './BussinessModal';

export default function BussinessDetailScreen() {

  const [modalVisible, setModalVisible] = useState(false);
  const param=useRoute().params;
    const navigation=useNavigation();
    const [business, setBusiness]=useState(param.business);
    const [isReadMore, setIsReadMore]=useState(false);


    useEffect(()=>{
      console.log(param?.business)
     
    },[param])

  return (
    <View>
    <ScrollView style={{ height:'90%' }} nestedScrollEnabled={true}>
        <TouchableOpacity style={{position: 'absolute',zIndex:10,padding:20,paddingTop:40}}
        onPress={()=>{navigation.goBack()}}
      >

      <Ionicons name="arrow-back" size={30} color="white" />
      
      
      </TouchableOpacity>
      <View>
        <Image source={{uri:business?.image[0]?.url}}
        style={{width:'100%',height:300}}
        />
      </View>
      <View style={{padding:20}}>

      <Text style={{fontFamily:'outfit-bold',fontSize:30}}>{business?.name}</Text>
      <View style={{display:'flex',flexDirection:'row',marginVertical:10}}>

      <Text style={{fontFamily:'outfit-medium',fontSize:20,color:Colors.Primary}}>{business?.contactPerson} 🌟 </Text>
      <Text style={{backgroundColor:Colors.Light,padding:5,marginLeft:5,borderRadius:5}}>{business?.category?.name}</Text>
      </View>
      
        
      <Text style={{fontFamily:'outfit',fontSize:17,color:'#474E68'}}>
      <Entypo name="location-pin" size={25} color='#474E68'/>{business?.address}</Text>
      </View>

      <View style={{borderWidth:1,marginHorizontal:20,borderRadius:20,borderColor:'#D3D3D3'}}></View>

      <View style={{paddingHorizontal:20}}>
      <Text style={{fontFamily:'outfit-medium',fontSize:25,marginVertical:10}}>About</Text>
      
      <Text style={{fontSize:16,color:'gray',fontFamily:'outfit',lineHeight:28}} numberOfLines={isReadMore?0:5}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quis, illum ut non voluptates laudantium obcaecati iure! Tenetur ipsa possimus saepe, ut suscipit minima facere voluptates iusto quis voluptatibus blanditiis exercitationem eveniet similique cum harum explicabo perferendis. Earum autem sunt quo ad consequatur optio adipisci? Fuga ducimus quasi, est necessitatibus, distinctio maxime magnam earum eos saepe a blanditiis mollitia deserunt dolorum. Tenetur, aliquam. Exercitationem similique illum voluptatem commodi molestias pariatur deleniti ullam dolore. Officia dolor qui praesentium ex porro accusantium dolorem nisi non. Hic, praesentium voluptas animi corrupti nulla excepturi maiores numquam expedita tenetur aut eius harum beatae ipsa debitis!</Text>
      <TouchableOpacity onPress={()=>setIsReadMore(!isReadMore)}>
      <Text style={{color:Colors.Primary,fontSize:16,fontFamily:'outfit-medium'}}>{isReadMore?'Read Less':'Read More'}</Text>
      </TouchableOpacity>
      </View>
      <View style={{borderWidth:1,margin:20,borderRadius:20,borderColor:'#D3D3D3'}}></View>
      <View>
       <BussinessPhotos business={business}></BussinessPhotos>

      </View>
    </ScrollView>
    <View style={{ display:'flex',flexDirection:'row',gap:10,margin:10 }}>
    <TouchableOpacity  style={{ padding:15,borderColor:Colors.Primary,borderWidth:2,borderRadius:15,alignItems:"center",flex:1}}>
      <View >
        <Text style={{fontFamily:'outfit-medium',fontSize:20,color:Colors.Primary}}>Message</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>setModalVisible(true)} style={{ padding:15, borderColor:Colors.Primary,borderWidth:2,borderRadius:15,alignItems:"center",backgroundColor:Colors.Primary}}>
      <View >
        <Text style={{fontFamily:'outfit-medium',fontSize:20,color:Colors.White,textAlign:'center'}}>Book Now</Text>
      </View>
    </TouchableOpacity>
    </View>
    <Modal 
    animationType='slide'
    visible={modalVisible}
    >
      <View>

     <BussinessModal businessId={business.id} modalView={()=>setModalVisible(false)} />
      </View>

    </Modal>
    </View>
  )
}