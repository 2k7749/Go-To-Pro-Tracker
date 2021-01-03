import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CallApi from './../Utils/CallApi';

const selectedColor = [
    'deeppink',
    'aqua',
    'chartreuse',
    'crimson',
    'gold',
    'indigo',
    'salmon',
    'slateblue'
  ];


const UnFollowDuty = ({ duty, toggleDutyDoneCallback }) => {

    const id = duty._id;
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

    const colorRamdom = () => {
        return selectedColor[Math.floor((Math.random()*selectedColor.length))];
    }

    const newHistory = {
        dutyId: id,
        dateString: Date.now(),
        timestamps: Date.now(),
        selectedColor: colorRamdom(),
        selected: true
    }

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
                            CallApi.updateDutyHistory(newHistory).then( (res) => {
                                if( res.success === true ){
                                    Alert.alert('Bạn đã hoàn thành mục tiêu hôm nay!');
                                }else{
                                    Alert.alert('Có lỗi khi cập nhật lịch sử!');
                                }
                            }); 
                            
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
       try{
        e.stopPropagation();
        setIsRunning(true);
       } catch ( err ) {
           console.log(err); 
       }
    };
    
    const pauseUnfollowduty = (e) => {
        try{
        e.stopPropagation();
        setIsRunning(false);
        } catch ( err ) {
        console.log(err); 
        }
    };
    
    const resetUnfollowduty = (e) => {
        pauseUnfollowduty(e);
        Alert.alert(
            'Thiết đặt lại',
            'Bạn chắc chắn muốn đặt lại đồng hồ đếm cho mục tiêu này ?',
            [
                {
                    text: 'Huỷ',
                    style: 'cancel',
                },
                {
                    text: 'Đắt lại',
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
                    { isRunning ? 'Đang chạy' : 'Đã dừng' }
                </Text>
            </View>

            <View style={ styles.containerButton }>
                {
                    isRunning ? (
                        <TouchableOpacity onPress={ (e) => pauseUnfollowduty(e) }>
                            <Image
                                source={ require('./../assets/pause.gif') }
                                style={ styles.imageBtn }
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={ (e) => startUnfollowduty(e) }>
                            <Image
                                source={ require('./../assets/btnplay.gif') }
                                style={ styles.imageBtn }
                            />
                        </TouchableOpacity>
                    )

                }

                        <TouchableOpacity onPress={ (e) => resetUnfollowduty(e) }>
                            <Image
                                source={ require('./../assets/reset.gif') }
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
    containerButton: {
        flexDirection: 'row',
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