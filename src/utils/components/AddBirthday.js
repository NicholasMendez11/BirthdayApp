import React, {useState} from 'react'
import { StyleSheet, View, TextInput,Text} from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'; // Format the date 

export default function AddBirthday(props) {
    const {setShowList}=props;
    const [date, setDate] = useState(new Date())
    const [formDate, setFormDate] = useState({})
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    console.log(formDate)

    const onChange = (event, selectedDate)=>{
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
      const dateBirth = currentDate
      dateBirth.setHours(0)
      dateBirth.setMinutes(0)
      dateBirth.setSeconds(0)

      setFormDate({...formDate, dateBirth})
    }
    const showMode = (currentMode)=>{
      setShow(true);
      setMode(currentMode)
    }
    const showDatepicker = () => {
      showMode('date');
    };
    /*const showTimepicker = () => {
      showMode('time');
    };*/
    
    return (
        <View>
             <TextInput
                style={styles.box}
                placeholder='Name'
                placeholderTextColor="#FEAA2F"
                
      />
        <TextInput
                style={styles.box}
                placeholder='Last Name'
                placeholderTextColor="#9CD3D6"
               
      />
      <View style={[styles.box, styles.datePicker]} >
        <Text style={{color: formDate.dateBirth?    '#fff':"#EF8A92"}} onPress={showDatepicker} >{formDate.dateBirth?  moment(formDate.dateBirth).format('LL'):'Date of Birth'}</Text>
      </View>
           
              {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
        </View>
    )
}

const styles = StyleSheet.create({
    
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
datePicker:{
  justifyContent:'center',
},





}

)
