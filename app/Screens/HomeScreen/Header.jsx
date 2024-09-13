import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Color from '../../Utils/Colors'
import { Feather, FontAwesome5  } from '@expo/vector-icons';


export default function Header() {

   

    const {user, isLoading}=useUser();
  return user&&(
    <View style={styles.container}>
        <View style={styles.profileMainContainer}>
            <View style={styles.profileContainer}>
                <Image source={{uri:user?.imageUrl}}
                style={styles.userImage}
                />
                <View>
                    <Text style={{fontSize:20,color:Color.White,fontFamily:'outfit'}}>Welcome</Text>
                    <Text style={{fontSize:25,color:Color.White,fontFamily:'outfit'}}>{user?.fullName}</Text>
                </View>
            </View>
        <Feather name="bookmark" size={24} color={Color.White} />
        </View>
        <View style={styles.SearchBarContainer}>
            <TextInput placeholder='Search' style={styles.textInput} />
            <FontAwesome5 name="search" size={20} color={Color.Primary} style={{backgroundColor:Color.White,padding:10,borderRadius:8}}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    userImage: {
        width:45,
        height:45,
        borderRadius:50,
        
    },
    container:{
        
        padding:20,
        paddingTop:40,
        backgroundColor:Color.Primary,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        
    },
    profileMainContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    SearchBarContainer:{
        marginTop:10,
        marginLeft:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:15,
        
    },
    textInput:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:Color.White,
        borderRadius:8,
        width:'80%',
        fontSize:16,
    }
})