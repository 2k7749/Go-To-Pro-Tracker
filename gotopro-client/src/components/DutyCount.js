import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CallApi from './../Utils/CallApi'

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

const DutyCount = ({ duty, toggleDutyDoneCallback }) => {

    const id = duty._id;
    let status = duty.status;
    const borderColor = {
        borderColor: duty.color,
    };

    const [ count, setCount ] = useState(0);

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

    const increCount = (e) => {
        e.stopPropagation(); // Xu ly trong 1 Scope nhat dinh khong lan toa
        if( count >= duty.goal){
            setCount(duty.goal);
        }else{
            setCount( ( currentVal ) => currentVal + 1 );
        }
        
        if( count === duty.goal && duty.status === false ){
            CallApi.updateDutyHistory(newHistory).then( (res) => {
                if( res.success === true ){
                    Alert.alert('Bạn đã hoàn thành mục tiêu hôm nay!');
                }else{
                    Alert.alert('Có lỗi khi cập nhật lịch sử!');
                }
            }); 

            toggleDutyDoneCallback(e, id, status);
            status = true;
        }
    };

    const decreCount = (e) => {
        e.stopPropagation();
        if( count <= 0 ){
            setCount(0);
        }else{
            setCount ( ( currentVal ) => currentVal - 1 );
        }
        
        if( count === duty.goal && count >= 0 && duty.status === true){
            toggleDutyDoneCallback(e, id, status);
            status = false;
        }
    };

    return (
        <View style = {[ styles.container, borderColor ]}>
            <TouchableOpacity style={ styles.btn } onPress={ (e) => decreCount(e) }>
                <View>
                        <Image
                            source={ require('./../assets/minus.gif') }
                            style={ styles.imageBtn }
                        />
                </View>
            </TouchableOpacity>
            <Text style={ styles.text }> {count} </Text>
            <TouchableOpacity style={ styles.btn } onPress={ (e) => increCount(e) }>
                <View>
                            <Image
                                source={ require('./../assets/plus.gif') }
                                style={ styles.imageBtn }
                            />
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
    imageBtn: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
    },
    btn: {
        justifyContent: 'center',
        marginHorizontal: 5,
    }
})

export default DutyCount;