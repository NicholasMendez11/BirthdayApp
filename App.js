import React, {useState} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text,TouchableOpacity,Image} from 'react-native';
import LogIn from './src/utils/components/LogIn';
import Application from './src/utils/components/Application'
import 'firebase/auth';
import Register from './src/utils/components/Register';



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
