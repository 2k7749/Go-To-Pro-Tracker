import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const UnFollowDuty = ({ duty, toggleDutyDoneCallback }) => {

    const id = duty.dutyId;
    const [ status, setStatus ] = useState( duty.status );
    const [ time, setTime ] = useState({
        hours: 0,
        mins: 0,
        secs: 0,
    });
    const [ isRunning, setIsRunning ] = useState(false);
    const timeGoal = {
        hours: duty.hours,
        mins: duty.minutes,
    };

    const borderColor = {
        borderColor: duty.color,
    };

    let padToTwo = ( number ) => ( number <= 9 ? `0${number}` : number );

    useEffect(
        (e) => {
            let intervalId;
            if(isRunning){
                const startTime = Date.now();
                intervalId = setInterval(() => {
                    const runAt = Date.now();
                    const deltaMillisecs = runAt - startTime;
                    const deltaSecs = Math.round(deltaMillisecs / 1000);

                    if( time.secs + deltaSecs <= 59 ){
                        setTime({ ...time, secs: time.secs + deltaSecs });
                    }else{
                        const secsExcedingMin = time.secs + deltaSecs - 60;

                        if( time.mins < 59 ){
                            setTime({
                                ...time, secs: secsExcedingMin,
                                mins: time.mins + 1,
                            });
                        }else{
                            setTime({
                                ...time, 
                                hours: time.hours + 1,
                                mins: 0,
                                secsExcedingMin,
                            });
                        }
                    }
                    if( time.hours >= timeGoal.hours &&
                        time.mins >= timeGoal.mins &&
                        duty.status === false
                        ){
                            Alert.alert('You have reached your goal for the day!');
                            toggleDutyDoneCallback( e, id, status );
                            setStatus( true );
                            setIsRunning( false );
                        }
                }, 1000);
            } else {
                clearInterval( intervalId );
            }

            return () => clearInterval( intervalId );
        },[ time, isRunning ],
    );

    const startUnfollowduty = (e) => {
        e.stopPropagation();
        setIsRunning(true);
    };
    
    const pauseUnfollowduty = (e) => {
        e.stopPropagation();
        setIsRunning(false);
    };
    
    const resetUnfollowduty = (e) => {
        pauseUnfollowduty(e);
        Alert.alert(
            'Reset Follow Duty',
            'Are you sure you want to reset the stopwatch for this task?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        setTime({
                            hours: 0,
                            mins: 0,
                            secs: 0,
                        });
                    },
                },
            ],
            { cancelable: false },
        );
    };

    return (
        <View style={[ styles.container, borderColor ]}>

            <View style={ styles.timerBox }>
                <Text>
                { `${padToTwo(time.hours)} : ${padToTwo(time.mins)} : ${padToTwo(time.secs,)}` }
                {' '} 
                {/* is a simple javascript function that will be outside the class and it helps in making the digits in stopwatch exactly of length “2” */}
                </Text>
                <Text style={ styles.isRunning }>
                    { isRunning ? 'Running' : 'Stopped' }
                </Text>
            </View>

            <View style={ styles.container }>
                {
                    isRunning ? (
                        <TouchableOpacity onPress={ (e) => pauseUnfollowduty(e) }>
                            <Image
                                source={ require('./../assets/pause.png') }
                                style={ styles.imageBtn }
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={ (e) => startUnfollowduty(e) }>
                            <Image
                                source={ require('./../assets/play.png') }
                                style={ styles.imageBtn }
                            />
                        </TouchableOpacity>
                    )

                }

                        <TouchableOpacity onPress={ (e) => resetUnfollowduty(e) }>
                            <Image
                                source={ require('./../assets/reset.png') }
                                style={ styles.imageBtn }
                            />
                        </TouchableOpacity>

            </View>

        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 2,
        margin: 2,
        borderWidth: 1,
    },
    timerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    isRunning: {
        marginLeft: 10,
        color: 'slategrey',
    },
    imageBtn: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
    }

});

export default UnFollowDuty;