import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import CallApi from '../Utils/CallApi';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';

const dutyColors = [
  { colorCode: '#f9c74f', displayName: 'Yellow' },
  { colorCode: '#90be6d', displayName: 'Green' },
  { colorCode: 'pink', displayName: 'Pink' },
  { colorCode: '#4ECDC4', displayName: 'Light Blue' },
  { colorCode: '#FF6B6B', displayName: 'Light Red' },
];

const AddDutyScreen = ({ route, navigation }) => {
  const [ dutyName, setDutyName ] = useState('');
  const [ dutyDescription, setDutyDescription ] = useState('');
  const [ dutyColor, setDutyColor] = useState('lavender');
  const [ dutyGoal, setDutyGoal] = useState('0');
  const [ dutyHours, setDutyHours] = useState('0');
  const [ dutyMinutes, setDutyMinutes] = useState('0');
  const { type } = route.params;

  
  const displayType = () => {
    if(type === 'time'){
      return(
        <View>
          <Text style={ styles.basictext }>
            Daily Goal
          </Text>
          <View style={ styles.timeInput }>
              <Text>
                Giờ
              </Text>
              <TextInput
                value={ dutyHours }
                keyboardType= "numeric"
                onChangeText={ setDutyHours }
                style={ styles.textinput }
              />
              <Text>
                Phút
              </Text>
              <TextInput
                value={ dutyMinutes }
                keyboardType= "numeric"
                onChangeText={ setDutyMinutes }
                style={ styles.textinput }
              />
          </View>
        </View>
      );
    }else if( type === 'count' ){
      return (
        <View>
          <Text style={ styles.text }>Daily Goal</Text>
          <View style={ styles.countInput }>
            <TextInput
              style={ styles.input }
              value={ dutyGoal }
              keyboardType="numeric"
              onChangeText={ setDutyGoal }
            />
          </View>
        </View>
      );
    }
  };


  const handleSubmit = () => {
    const reqRefresh = true;
    const randomId = uuidv4();

    if(!dutyName || !dutyDescription){
      Alert.alert('Vui lòng điền đủ thông tin')
    }
    if(
      parseInt( dutyHours ) < 0 ||
      parseInt( dutyMinutes ) < 0 ||
      parseInt( dutyGoal ) < 0
    ){
      Alert.alert('Vui lòng điền đúng số');
    }else{
      const newDuty = {
       // dutyId: randomId,
        dutyName,
        description: dutyDescription,
        color: dutyColor,
        type,
        goal: dutyGoal,
        hours: dutyHours,
        minutes: dutyMinutes,
        creationDate: Date.now(),
        status: false,
        currentStreak: 0,
        maxStreak: 0,
        history: {},
      };
      CallApi.postDuty(newDuty).then( () => {
        navigation.navigate( 'TodayDutyScreen', { reqRefresh } );
      }); 
    }
  };


  return (
    <SafeAreaView style={ styles.container }>
      <ScrollView style={ styles.scrollView }>
        <Text style={ styles.basictext }>
          Mục tiêu
        </Text>
        <TextInput
          style={ styles.textinput }
          value={ dutyName }
          onChangeText={ setDutyName }
          placeholder="Ex. Workout"
        />
        <Text style={ styles.basictext }>Why?</Text>
        <TextInput 
          style={ styles.textinput }
          value={ dutyDescription }
          multiline={ true }
          numberOfLines={ 3 }
          onChangeText={ setDutyDescription }
          placeholder="Ex. To get fit for summer"
        />
        <Text style={ styles.basictext }>
          Color
        </Text>
        <Picker
          style={[ styles.boxpicker, { backgroundColor: dutyColor } ]}
          selectedValue={ dutyColor }
          onValueChange={ ( colorVal ) => setDutyColor(colorVal) }
          >
            {dutyColors.map( ( colors ) => (
              <Picker.Item
                style={ styles.pickerItem }
                key={ colors.colorCode }
                value={ colors.colorCode }
                label={ colors.displayName }
              />
            ))}
          </Picker>
          <View>{ displayType() }</View>
          <TouchableOpacity onPress={ handleSubmit }>
              <View style={ styles.btnaddduty }>
                <Text style={ styles.textadd }> Thêm Mới </Text>
              </View>
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>

  );



};

const styles = StyleSheet.create({
  basictext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  timeInput: {
    flexDirection: 'column',
  },
  textinput: {
    borderWidth: 1,
    borderColor: 'slategrey',
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'ivory',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 30,
  },
  scrollView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  boxpicker: {
    marginTop: 20,
    borderColor: 'slategrey',
    borderRadius: 5,
  },
  pickerItem: {
    backgroundColor: 'lavender'
  },
  btnaddduty: {
    width: 150,
    height: 50,
    backgroundColor: '#1A535C',
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  textadd: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center'
  }
});

export default AddDutyScreen;


