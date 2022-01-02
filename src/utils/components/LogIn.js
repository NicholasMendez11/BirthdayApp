import React,{useState,useEffect}  from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import { authentication } from '../firebase';
import {signInWithEmailAndPassword,} from "firebase/auth";


export default function LogIn(props) {
    const {setEmail,setPassword,email,password,setIsSignedIn} = props;
    const [formError, setFormError] = useState({})
   
   
    const SingIn = () =>{
      let errors ={}

      if (!email || !password) {
      if (!email) errors.email = true;
      if (!password) errors.password = true;
      }else{ 
        signInWithEmailAndPassword(authentication, email, password)
        .then((re) => {
          setIsSignedIn(true);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`Error code is: ${errorCode},
           and the error message is: ${errorMessage}`);
        })}

        setFormError(errors);

       
      }


    return (
        <View styles={styles.container}>
            <TextInput  keyboardType='email-address' style={ formError.email?  styles.error :styles.box} placeholder=' Enter your email' placeholderTextColor="#9CD3D6" value={email} onChange={e=>setEmail(e.nativeEvent.text)}/>
            <TextInput style={ formError.password?  styles.error :styles.box}  secureTextEntry={true} placeholder=' enter your password' secureTextEntry={true} placeholderTextColor="#FEAA2F" value={password}onChange={e =>setPassword(e.nativeEvent.text)}/>
            <TouchableOpacity style={styles.loginButtom} onPress={SingIn} ><Text style={styles.buttomLoginText}>Log in</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        width: 285,
        height: 20,
        alignItems:"center",
        justifyContent:"center",
    
       
      },
      box:{
      width: 285,
      height: 45,
      backgroundColor:'#FFFFFF',
      margin: 5,
      top: 10,
      padding: 10,
      borderWidth:6,
      borderRadius:10,
      borderColor:'#1e3040',
        color: '#fff',
        backgroundColor:'#1e3040',
        fontSize:14,

      
      },
    buttomLoginText:{
        color: "#000000",
       //fontFamily: 'Times',
        fontStyle:'normal',
        fontSize:25,
      },
      loginButtom:{
        width: 237,
        height: 54,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        left: 25,
     
       
        marginTop:20,
        justifyContent:"center", //Lo alinea vertical 
        alignItems:"center",    // Alinea el contenido horizontal
        top: 10,
        marginBottom:20,
      },
      error:{
        width: 285,
      height: 45,
      margin: 5,
      top: 10,
      paddingHorizontal: 20,
      borderWidth:1,
      borderRadius:10,
      borderColor: "#940c0c",
      color: '#fff',
      backgroundColor:'#1e3040',
      fontSize:14,
       
      }
    

})
