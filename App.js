import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './app/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
import TabNavigation from './app/Navigation/TabNavigation';
import { useFonts } from 'expo-font';
// import { SignInWithOAuth } from "./components/SignInWithOAuth";
import * as SplashScreen from 'expo-splash-screen';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


export default function App() {

  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey='pk_test_c3VwZXJiLWhvcnNlLTEyLmNsZXJrLmFjY291bnRzLmRldiQ'>

    <View style={{width: '100%', height: '100%'}}>
    
      <SignedIn>
        {/* <Text>Hello</Text> */}
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
      </SignedIn>
       
       <SignedOut>
       <Login></Login>
       </SignedOut>


      {/* <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat1.png',}} style={{width: 200,height:200}}/>
      <Text> App.js {getfull('hello')}</Text> */}
      <StatusBar style="auto" />
    </View>
     </ClerkProvider>





  //   <View>
  //   <Image
  //     source={{
  //       uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
  //     }}
  //     style={{width: 200, height: 200}}
  //   />
  //   <Text>Hello, I am your cat!</Text>
  // </View>
  )
}



// 
