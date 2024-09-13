import { StyleSheet,View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import React from 'react'
import Colors from '../../Utils/Colors'
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();
export default function Login() {

    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);

  return (
    <View style={styles.loginImg}>
        <Image source={require('./../../../assets/splash.png')}
            style={{width:400,height:400}}
        />
      <View style={styles.subContainer}>
        <Text style={{fontSize:27,color: Colors.White,textAlign: 'center'}}>
            Lets Find Somthing
        </Text>
        <Text style={{fontSize:17, color: Colors.White,textAlign: 'center',marginTop:20}}>
            Best App
        </Text>
        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.button} onPress={onPress}>
            <Text style={{fontSize:17, color: Colors.Primary,textAlign: 'center'}}>
                Let's Get Started
            </Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImg:{
        width: '100%',
        flex: 1,
        borderWidth:4,
        padding:0,
        margin:0,
        borderColor: Colors.Black,
    },
    subContainer: {
        width:'100%',
        backgroundColor:Colors.Primary,
        height:'100%',
        marginTop:20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20
    },
    button:{
        padding:15,
        backgroundColor:Colors.White,
        borderRadius:99,
        marginTop:40
    }

})