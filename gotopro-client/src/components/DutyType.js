import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DutyType = ({ description, type, title }) => {
    const handleIcon = () => {
        if(type === 'time'){
            return (
                <Image 
                    source={ require('./../assets/hourglass.gif') }
                    style={ styles.imageBtn }
                />
            );
        } else if ( type === 'count' ){
            return <Image 
            source={ require('./../assets/counter.gif') }
            style={ styles.imageBtn }
        />
        } else if ( type === 'check' ){
            return (
                <Image
                    source={ require('./../assets/tickcheck.gif') }
                    style={ styles.imageBtn }
                />
            );
        }
    };
    return (
        
        <View style={(type === 'time') ? styles.typeBoxTime : (type === 'count') ? styles.typeBoxCount : styles.typeBoxCheck }>
            <View style={ styles.iconBackground }>
                {handleIcon()}
            </View>
            <View>
                <Text style={ styles.typeText }> { title } </Text>
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
    typeBoxTime: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFCC00',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    typeBoxCount: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FE0000',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    typeBoxCheck: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#4285F4',
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