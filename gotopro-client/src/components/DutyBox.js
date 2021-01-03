import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import CallApi from './../Utils/CallApi';
import UnFollowDuty from './../components/UnFollowDuty';
import DutyCheckBtn from './../components/DutyCheckBtn';
import DutyCount from './../components/DutyCount';
import { theme } from '../core/theme';

const { width, height } = Dimensions.get('screen');
const DutyBox = ({ duty, reqRefreshCallback }) => {
    const id = duty._id;
    const { status } = duty;
    const boxColor = {
        backgroundColor: duty.color
    };
    const boxColorBorder = {
        backgroundColor: duty.color
    };

    const displayGoal = () => {
        if(duty.type === 'time'){
            return (
                <View>
                <Text style={styles.goalText}>
                  {' '}
                  <Text style={{ fontWeight: 'bold' }}>Hoàn thành cần:</Text> {duty.hours} h{' '}
                  {duty.minutes} mins{' '}
                </Text>
                <UnFollowDuty duty={ duty } toggleDutyDoneCallback={ toggleDutyDone } />
              </View>
            );
          } else if (duty.type === 'count') {
            return (
              <View>
                <Text style={styles.goalText}>
                  {' '}
                  <Text style={{ fontWeight: 'bold' }}>Hoàn thành cần:</Text> {duty.goal}{' '}
                </Text>
                <DutyCount duty={ duty } toggleDutyDoneCallback={ toggleDutyDone } />
              </View>
            )
        }
    };

    const toggleDutyDone = async (e, id, status) => {
        try{
        status = status === false ? true : false;
        //await e.stopPropagation();
        await CallApi.updateDutyStatus(id, status);
        reqRefreshCallback();
        }catch ( err ){
          console.log( err );
        }
    };

    return (
      <View>
        <View style={{ 
          alignSelf: 'center',
          position: 'relative',
          top:0,
          right:0,
          left: 0,
          bottom: 0,
          }}>
        <TouchableOpacity onPress={(e) => toggleDutyDone(e, id, status)}>
            <DutyCheckBtn duty={ duty } />
        </TouchableOpacity>
        </View>
        <View style={[styles.container, boxColorBorder]} pointerEvents="box-none">
        <View style={[styles.dutyTitle, boxColor]}>
        <Text style={styles.dutyNameText} numberOfLines={ 1 }> {duty.dutyName} </Text>
        <View style={ styles.descriptionBox }>
        <Text style={ styles.descriptionText }>
          <Text style={{ fontWeight: 'bold' }}>Giúp?: </Text> {duty.description}{' '}
        </Text>
        </View>
      </View>
      
      {displayGoal()}

    </View>
    </View>
    );
};

const styles = StyleSheet.create({
    dutyNameText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
      },
      dutyTitle: {
        flexDirection: 'column',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        paddingVertical: 5,
        flexWrap: 'wrap',
        alignItems: 'stretch',

      },
      goalText: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center'
      },
      descriptionText: {
        color: '#242424',
        fontSize: 12,
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
      },
      descriptionBox: {
        paddingHorizontal: 10,
      },
      container: {
        position:'relative',
        justifyContent: 'space-between',
        margin: 10,
        elevation : 10,
        overflow: 'hidden',
        borderRadius: 10,
        paddingBottom: 10,
        width: width / 2.215,
        height: height / 3.5,
      }
})

export default DutyBox;