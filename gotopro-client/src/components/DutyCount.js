import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const DutyCount = ({ duty, toggleDutyDoneCallback }) => {

    const id = duty.dutyId;
    let status = duty.status;
    const borderColor = {
        borderColor: duty.color,
    };

    const [ count, setCount ] = useState(0);

    const increCount = (e) => {
        e.stopPropagation(); // Xu ly trong 1 Scope nhat dinh khong lan toa
        setCount( ( currentVal ) => currentVal + 1 );
        if( count === duty.goal && duty.status === false ){
            Alert.alert('You have reached your goal for the day!');
            toggleDutyDoneCallback(e, id, status);
            status = true;
        }
    };

    const decreCount = (e) => {
        e.stopPropagation();
        setCount ( ( currentVal ) => currentVal - 1 );
        if( count === duty.goal && count >= 0 && duty.status === true){
            toggleDutyDoneCallback(e, id, status);
            status = false;
        }
    };

    return (
        <View style = {[ styles.container, borderColor ]}>
            <TouchableOpacity style={ styles.btn } onPress={ (e) => decreCount(e) }>
                <View>
                    <Text style={ styles.text }>
                        -
                    </Text>
                </View>
            </TouchableOpacity>
            <Text style={ styles.text }> {count} </Text>
            <TouchableOpacity style={ styles.btn } onPress={ (e) => increCount(e) }>
                <View>
                    <Text style={ styles.text }>
                        +
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
        margin: 3,
        alignItems: 'center',
        alignSelf: 'center',
    },
    text: {
        alignSelf: 'center',
        fontSize: 26,
        fontWeight: 'bold',
    },
    btn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        marginHorizontal: 5,
        borderColor: 'slategrey',
        borderWidth: 2,
        borderRadius: 30
    }
})

export default DutyCount;