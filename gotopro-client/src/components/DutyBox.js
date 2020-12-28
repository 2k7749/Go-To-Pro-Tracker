import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import CallApi from './../Utils/CallApi';
import UnFollowDuty from './../components/UnFollowDuty';
import DutyCheckBtn from './../components/DutyCheckBtn';
import DutyCount from './../components/DutyCount';

const screenWidth = Dimensions.get('window').width;
const DutyBox = ({ duty, reqRefreshCallback }) => {
    const id = duty._id;
    const { status } = duty;
    const boxColor = {
        backgroundColor: duty.color,
    };
    const boxColorBorder = {
        borderColor: duty.color,
        borderWidth: 3,
    };

    const displayGoal = () => {
        if(duty.type === 'time'){
            return (
                <View>
                    <Text style={ styles.goalText }>
                    {' '}
                        <Text style = {{ fontWeight: 'bold' }}>
                            Goal:
                        </Text> { duty.hours } h{' '} { duty.minutes } mins{' '}
                    </Text>
                    <UnFollowDuty duty={ duty } toggleDutyDoneCallback={ toggleDutyDone } />
                </View>
            );
        } else if (duty.type === 'count'){
            return(
                <View>
                    <Text style={ styles.goalText }>
                        {' '}
                        <Text style={{ fontWeight: 'bold' }}>
                            Goal:
                        </Text> { duty.goal }{' '}

                    </Text>
                    <DutyCount duty={ duty } toggleDutyDoneCallback={ toggleDutyDone } />
                </View>
            )
        }
    };

    const toggleDutyDone = async (e, id, status) => {
        status = status === false ? true : false;
        e.stopPropagation();
        await CallApi.updateDutyStatus(id, status);
        reqRefreshCallback();
    };

    return (
        <View style={ [styles.container, boxColorBorder] }>

            <View style={ [styles.dutyTitle, boxColor] }>
                <Text style={ styles.dutyNameText }>
                    {duty.dutyName}
                </Text>
                <TouchableOpacity onPress={ (e) => toggleDutyDone(e, id, status) }>
                    <DutyCheckBtn duty={ duty } />
                </TouchableOpacity>
            </View>

            <View style={ styles.descriptionBox }>
                <Text style= {  styles.descriptionText }>
                    {' '}
                    <Text style= {{ fontWeight: 'bold' }}>Why: </Text> { duty.description }{' '}
                </Text>
                
            </View>
            {displayGoal()}

        </View>
    );
};

const styles = StyleSheet.create({

    goalText: {
        color: 'grey',
        fontSize: 16,
        alignSelf: 'center',
    },
    container: {
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        justifyContent: 'space-between',
        margin: 10,
        paddingBottom: 10,
        width: screenWidth - 200,
        height: 210,
    },
    dutyTitle: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    dutyNameText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    descriptionBox: {
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    descriptionText: {
        color: 'grey',
        fontSize: 12,
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
    }

})

export default DutyBox;