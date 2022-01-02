import React,{useState} from 'react';
import { StyleSheet,Text} from 'react-native'
import { SpeedDial } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Application(props) {
    const {setIsSignedIn}= props;

  const [open, setOpen] = useState(false);
  return (
    <SafeAreaProvider style={styles.container}>
        <Text style={styles.LovelyText}>Te Amo mucho Ahimet!</Text>
    <SpeedDial
      isOpen={open}  
      icon={{ name: 'menu-open', color: '#fff' }}
      openIcon={{ name: 'edit', color: '#fff' }}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
    >
      <SpeedDial.Action
        icon={{ name: 'logout', color: '#fff' }}
        title="LogOf"
        onPress={()=>setIsSignedIn(false)}
        overlayColor={'#B1044F'}
      />
      
    </SpeedDial>
    </SafeAreaProvider>
  )}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor:"#15212b",
        height: null,
        alignItems:"center",
        justifyContent:"center",
    },
    LovelyText:{
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

    LogOfButtom:{
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
    },
    LogOfButtomText:{
    fontWeight: 'bold'
    }
})
