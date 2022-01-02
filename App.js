import React, {useState,useEffect} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView,Image, StatusBar } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer } from'@react-navigation/native';
import Register from './src/utils/components/Register';
import LogIn from './src/utils/components/LogIn';
import Application from './src/utils/components/Application'
import 'firebase/auth';
/*import {AppLoading} from 'expo-app-loading';
import { useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic 
} from '@expo-google-fonts/lato'*/
import { authentication } from './src/utils/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";


export default function App() {
  
 /*//Fonts 
  let [fontsLoaded, error] = useFonts({
    Lato_100Thin,
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }
*/


  const [logIn, setLogIn] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState()
  
 if (!isSignedIn) {
  return (
  
    
    <SafeAreaProvider style={styles.background}>
     
<Image source={require('./src/assets/image/birthday.png')} style={styles.SvgImageHBD}/>
<Text style={styles.HeaderText}>Do not forget a Birthday never again!</Text>

{logIn? //Determina cual de las dos form sera el visible. 
  <Register 
  setEmail={setEmail} 
  email={email}
  password={password}
  setPassword={setPassword}
  repeatPassword={repeatPassword}
  setRepeatPassword={setRepeatPassword}
  setLogIn={setLogIn}
 
/>:
  <LogIn 
  setEmail={setEmail} 
  email={email}
  password={password}
  setPassword={setPassword}
  setIsSignedIn={setIsSignedIn}
/> 
}
{logIn? 
  <TouchableOpacity  onPress={()=>setLogIn(false)}><Text style={styles.bottomText}>Do you have an account?</Text></TouchableOpacity>:
 <TouchableOpacity  onPress={()=>setLogIn(true)}><Text style={styles.bottomText}>I dont have an account</Text></TouchableOpacity>

      }
 

    </SafeAreaProvider>
   
  )
 } else {
   return(
     <Application
     setIsSignedIn={setIsSignedIn}
     />
   )
 }
  
}

const styles = StyleSheet.create({

  background:{
  
    flex: 1,
    backgroundColor:"#15212b",
    height: null,
    resizeMode: 'cover',
  //Why is no taking the full height!! Has to be releated with some child property ! check that!  
    alignItems:"center",
    justifyContent:"center",
  

  },
  HeaderText:{
    width: 364,
    height: 82,
    marginLeft:25 ,
    top:10,
    color: "#FFFFFF",
    //fontFamily:"Sans-serif",
    fontWeight:'bold',
    fontSize:32,
    lineHeight:38,

  },
  
  SvgImageHBD:{
    width: 261,
    height: 183,  
    
  },
  bottomText:{
    color: '#FFFFFF',
    //fontFamily: 'Sans-serif',
    fontStyle:'normal',
    fontSize:18,
    fontWeight:'300',

  },
 

})
