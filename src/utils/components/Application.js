import React,{useState} from 'react';
import { StyleSheet,Text,SafeAreaView, StatusBar} from 'react-native'
import { SpeedDial } from 'react-native-elements';
import { getAuth, signOut } from "firebase/auth";
import AddBirthday from './AddBirthday';

export default function Application(props) {
    const {setIsSignedIn}= props;
    const [showList, setShowList] = useState(true)
    const [open, setOpen] = useState(false);



    const Signout =() =>{


          const auth = getAuth();
          signOut(auth).then(() => {
            alert('Fuera')
            setIsSignedIn(false)

          }).catch((error) => {
            alert('Palo')
          });

    }


    
  return (
    
    <SafeAreaView style={styles.container}>
       <StatusBar barStyle='light-content' backgroundColor="#1ea1f2" />
       <SpeedDial
      isOpen={open}  
      icon={{ name: 'menu-open', color: '#B1044F' }}
      openIcon={{ name: 'menu-open', color: '#B1044F' }}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      color='#FFF'
    >
       <SpeedDial.Action
        icon={{ name: 'person-add', color: '#fff' }}
        title={showList? "Add new Birthday":"Confirm Birthday"}
        onPress={()=>setShowList(!showList)}
        color='#1ea1f2'
      
      />
      <SpeedDial.Action
        icon={{ name: 'logout', color: '#fff' }}
        title="LogOf"
        onPress={Signout}
        color='#820000'

      />
     
      
    </SpeedDial>
        {showList? 
        <><Text style={styles.LovelyText}>LIST</Text>
        <Text style={styles.LovelyText}>LIST</Text>
        <Text style={styles.LovelyText}>LIST</Text>
        <Text style={styles.LovelyText}>LIST</Text>
        </>
        :
          <AddBirthday
          setShowList={setShowList}/>
        }
        
  

    </SafeAreaView>


  )}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor:"#15212b",
        height: '100%',
        alignItems:"center",
        justifyContent:"center",
        
    },
    LovelyText:{
        width: 364,
        height: 82,
        marginLeft:25 ,
        top:10,
        color: "#FFFFFF",
        fontWeight:'bold',
        fontSize:32,
        lineHeight:38,
        textAlign:'center'
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
