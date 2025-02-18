import React from 'react';
import { Image, StyleSheet } from 'react-native';
const DutyCheckBtn = ({ duty }) => {
    const { status } = duty;

    const handleCheck = () => {
        if( status === false ){
            return (
                <Image 
                    source = { require('./../assets/untick.png') }
                    style = { styles.imageBtn }
                />
            );
        }else{
            return(
                <Image 
                source = { require('./../assets/tick.png') }
                style = { styles.imageBtn }
            />
            );
        }
    };
    return handleCheck();
};

const styles = StyleSheet.create({
    imageBtn: {
        width: 120,
        height: 50,
        resizeMode: 'contain',
    }
})

export default DutyCheckBtn;