import React, {useState,useEffect}  from 'react'
import { Text, StyleSheet, View,TextInput,TouchableOpacity } from 'react-native'
import {createUserWithEmailAndPassword,} from "firebase/auth";
import { authentication } from '../firebase';


export default function Register (props) {
    const {setEmail,setPassword,email,password,repeatPassword,setRepeatPassword,setLogIn} = props;
    const [formError, setFormError] = useState({})


    const RegisterUser = () =>{
      let errors ={}

      if (!email || !password||!repeatPassword) {
      if (!email) errors.email = true;
      if (!password) errors.password = true;
      if (!repeatPassword) errors.repeatPassword = true;
      }else if(password != repeatPassword){
        errors.password = true;
        errors.repeatPassword = true;
        alert("Passwords does not match")
      }
       else{
        createUserWithEmailAndPassword(authentication, email, password)
          .then((re)=>{
            console.log(re);
            setEmail('');
            setPassword('');
            setRepeatPassword('')
            alert('Your usse has been registered succesfully')
            setLogIn(false)

          })
            .catch((re)=>{
           alert(re.code)
                
              
            })}

      setFormError(errors);
      
    
      }

 return (
     <View styles={styles.container}>
        <TextInput keyboardType='email-address' style={ formError.email?  styles.error :styles.box}  placeholder='Choose an Email' placeholderTextColor="#9CD3D6"  value={email} onChange={e=>setEmail(e.nativeEvent.text)}/>
        <TextInput  style={ formError.password?  styles.error :styles.box}  secureTextEntry={true} placeholder='Choose a Password' value={password} placeholderTextColor="#EF8A92" onChange={e =>setPassword(e.nativeEvent.text)}
        rightIcon
        />
        <TextInput style={ formError.repeatPassword?  styles.error :styles.box} secureTextEntry={true} placeholder='Confirm the Password'placeholderTextColor="#FEAA2F" value={repeatPassword} onChange={e =>setRepeatPassword(e.nativeEvent.text)}/>
        <TouchableOpacity style={styles.registerButtom}  onPress={RegisterUser}><Text style={styles.buttomText}>Register</Text></TouchableOpacity>
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
  margin: 5,
  top: 10,
  paddingHorizontal: 20,
  borderWidth:1,
  borderRadius:10,
  borderColor:'#1e3040',
  color: '#fff',
  backgroundColor:'#1e3040',
  fontSize:14,
  
  },
  registerButtom:{
    width: 237,
    height: 54,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    left: 25,
    marginTop:20,
    justifyContent:"center", //Lo alinea vertical 
    alignItems:"center",    // Alinea el contenido horizontal

  },
  buttomText:{
    color: "#000000",
    //fontFamily: 'Sans-serif',
    fontStyle:'normal',
    fontSize:25,
  },
  error:{
    width: 285,
  height: 45,
  margin: 5,
  top: 10,
  paddingHorizontal: 20,
  borderWidth:1,
  borderRadius:10,
  borderColor: "#F44540",
  color: '#fff',
  backgroundColor:'#1e3040',
  fontSize:14,
   
  }




})
