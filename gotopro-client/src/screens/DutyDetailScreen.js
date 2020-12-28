import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import CallApi from './../Utils/CallApi';
import DutyCalendar from './../components/DutyCalendar';

const DutyDetailScreen = ({ navigation, route }) => {
  const { duty } = route.params;
  const id = duty._id;
  const dutyColorBackground = {
    backgroundColor: duty.color,
  };

  const createDate = () => {
    const cdate = new Date(duty.createDate);
    const cyear = cdate.getFullYear().toString();
    const cmonth = cdate.getMonth().toString();
    const cday = cdate.getDate().toString();
    return `${cday} / ${cmonth} / ${cyear}`;
  };

  const confirmDel = ( id ) => {
    Alert.alert(
      'Delete Duty',
      'Are you sure about this?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },{
          text: 'OK',
          onPress: () => {
            handleDeleteDuty(id);
          },
        },
      ],
      { cancelable: false },
    );
  };


  const handleDeleteDuty = ( idInputToDelete ) => {
    const reqRefresh = true;

    CallApi.deleteDuty( idInputToDelete ).then( () => {
      navigation.navigation(' TodayDuties ', { reqRefresh });
    });
  };

  const handleEditDuty = ( id ) => {
    const reqRefresh = true;
  }

  return(
    <SafeAreaView style={[ styles.container, {borderColor: duty.color } ]}>
      <View style={ styles.boxTitle }>
        <Text style={[ styles.nameText, dutyColorBackground ]}>
          {' '}
          { duty.dutyName }: {' '}
        </Text>
      </View>
      <ScrollView style={ styles.scrollView }>
        <Text style={ styles.titleText }>Your Why: </Text>
        <Text style={ styles.dataText }>{ duty.description }</Text>
        <Text style={ styles.titleText }>Create Date: </Text>
        <Text style={ styles.dataText }>{ createDate() }</Text>
        <Text style={ styles.titleText }>Duty Type: </Text>
        <Text style={ styles.dataText }>{ duty.capitalize }</Text>
        <Text style={ styles.titleText }>Your Daily Goal: </Text>
        <Text style={ styles.dataText }>{ duty.goal }</Text>
        <View
          style={[ styles.sectionBox, styles.streakView, dutyColorBackground ]}
        >
          <Text style={ styles.sectionText }>
            Streaks 
          </Text>
          <Image 
            source={ require('./../assets/streak.png') }
            style={ styles.imageBtn }
          />
        </View>
        
        <View style={ styles.streakView }>
          <View>
            <Text style={[ styles.titleText, {marginRight: 50} ]}>
              Current: {' '}
            </Text>
            <Text style={[ styles.dataText ]}>
              { duty.currentStreak }
            </Text>
          </View>
          <View>
            <Text style={ styles.titleText }>Maximun: </Text>
            <Text style={[ styles.dataText ]}>
                { duty.maxStreak }
            </Text>
          </View>
        </View>
        <View
          style={[ styles.sectionBox, styles.streakView, dutyColorBackground ]}
        >
          <Text style={ styles.sectionText }>Calendar </Text>
          <Image
            source={ require('./../assets/calendarcolor.png') }
            style={ styles.imageBtn }
          />
        </View>

        <DutyCalendar duty={ duty } />

        <View style={ styles.actions }>
          <View style={ styles.actionBox }>
            <Text style={ styles.deleteBtnText } onPress={ () => confirmDel(id) }>
              {' '}
              Delete{' '}
            </Text>
            <Image
              source={ require('./../assets/deletewhite.png') }
              style={ styles.imageBtn }
            />
          </View>

          <View style={ styles.actionBox }>
            <Text style={ styles.deleteBtnText } onPress={ () => handleEditDuty(id) }>
              {' '}
              Edit{' '}
            </Text>
            <Image 
              source={ require('./../assets/editwhite.png') }
              style={ styles.imageBtn }
            />

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )

};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'ivory',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth: 10,
    borderRadius: 20,
    paddingBottom: 20
  },
  boxTitle:{
    alignSelf: 'stretch'
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingVertical: 10,
    marginBottom: 20
  },
  scrollView:{ 
    flex: 2,
    alignSelf: 'stretch',
    paddingHorizontal: 10
  },
  titleText:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingLeft: 20
  },
  dataText: {
    fontSize: 10,
    color: 'grey',
    marginBottom: 20,
    paddingLeft: 20,
  },
  sectionBox: {
    fontSize: 21,
    fontWeight: 'bold'
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  sectionText:{
    fontSize: 21,
    fontWeight: 'bold'
  },
  imageBtn:{
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginLeft: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionBox: {
    width: 120,
    height: 50,
    backgroundColor: '#1A535C',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  deleteBtnText:{
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  }
});

export default DutyDetailScreen;