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
  ImageBackground
} from 'react-native';
//import { Picker } from '@react-native-community/picker';
import CallApi from '../Utils/CallApi';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import { theme } from './../core/theme';

// const dutyColors = [
//   { colorCode: '#f9c74f', displayName: 'Yellow' },
//   { colorCode: '#90be6d', displayName: 'Green' },
//   { colorCode: 'pink', displayName: 'Pink' },
//   { colorCode: '#4ECDC4', displayName: 'Light Blue' },
//   { colorCode: '#FF6B6B', displayName: 'Light Red' },
// ];


const AddDutyScreen = ({ route, navigation }) => {
  const [ dutyName, setDutyName ] = useState('');
  const [ dutyDescription, setDutyDescription ] = useState('');
  const [ dutyColor, setDutyColor] = useState('lavender');
  const [ dutyGoal, setDutyGoal] = useState('0');
  const [ dutyHours, setDutyHours] = useState('0');
  const [ dutyMinutes, setDutyMinutes] = useState('0');
  const { type } = route.params;

  
  const dutyColors = ['#5CD859', '#24A6D9', '#595BD9', '#8022D9', '#D159D8', '#D85963', '#D88559'];

  const renderColors = () => {
    return dutyColors.map( color => {
      return (
        <TouchableOpacity key={color} style={[ styles.colorSelect, {backgroundColor: color}]} onPress={ () => setDutyColor(color)} />
      )
    })
  }
  
  const displayType = () => {
    if(type === 'time'){
      return(
        <View>
          <Text style={ styles.basictext }>
            Số lần sẽ hoàn thành mỗi ngày
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
          <Text style={ styles.basictext }>Số lần sẽ hoàn thành mỗi ngày</Text>
          <View style={ styles.countInput }>
            <TextInput
              style={ styles.textinput }
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
        history: [], //<= FIX
      };
      CallApi.postDuty(newDuty).then( () => {
        navigation.navigate( 'TodayDutyScreen', { reqRefresh } );
      }); 
    }
  };


  return (
    <ImageBackground
            source={ require('./../assets/Login/background_dot.png') }
            resizeMode='repeat'
            style={ styles.background }
        >
    <SafeAreaView style={ styles.container }>
      <ScrollView style={ styles.scrollView }>
        <Text style={ styles.basictext }>
          Mục tiêu
        </Text>
        <TextInput
          style={ styles.textinput }
          value={ dutyName }
          onChangeText={ setDutyName }
          placeholder="Ví dụ: Ôn bài"
        />
        <Text style={ styles.basictext }>Giúp?</Text>
        <TextInput 
          style={ styles.textinput }
          value={ dutyDescription }
          multiline={ true }
          numberOfLines={ 3 }
          onChangeText={ setDutyDescription }
          placeholder="Ví dụ: Mai vào cuộc thi chính"
        />
        <Text style={ styles.basictext }>
          Chọn màu
        </Text>
        {/* <Picker
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
          </Picker> */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
            {renderColors()}
          </View>
          

          <View>{ displayType() }</View>
          <TouchableOpacity onPress={ handleSubmit } style={[ styles.createBtn, { backgroundColor: dutyColor }]}>
                <Text style={ styles.textadd }> Tạo mục tiêu </Text>
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  );



};

const styles = StyleSheet.create({
  basictext: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
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
  textadd: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center'
  },
  createBtn: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4
  }
});

export default AddDutyScreen;


