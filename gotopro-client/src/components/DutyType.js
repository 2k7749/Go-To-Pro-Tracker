import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DutyType = ({ description, type }) => {
    const handleIcon = () => {
        if(type === 'time'){
            return (
                <Image 
                    source={ require('./../assets/hourglass.png') }
                    style={ styles.imageBtn }
                />
            );
        } else if ( type === 'count' ){
            return <Text style={ styles.plusOne }> +1 </Text>
        } else if ( type === 'check' ){
            return (
                <Image
                    source={ require('./../assets/greentick.png') }
                    style={ styles.imageBtn }
                />
            );
        }
    };
    return (
        <View style={ styles.typeBox }>
            <View style={ styles.iconBackground }>
                {handleIcon()}
            </View>
            <View>
                <Text style={ styles.typeText }> { type } </Text>
                <Text style={ styles.descriptionText }> { description } </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageBtn: {
        width: 40,
        height: 40,
        alignSelf: 'center',
    },
    plusOne: {
        color: 'slategrey',
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    typeBox: {
        flexDirection: 'row',
        backgroundColor: '#1A535C',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    iconBackground: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'ivory',
        marginHorizontal: 10,
        borderRadius: 10,
    },
    typeText: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: 'white',
    },
    descriptionText: {
        color: 'white',
    }
});

export default DutyType;