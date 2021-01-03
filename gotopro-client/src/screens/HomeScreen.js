import React, { useEffect, useState } from 'react';
import {
    Text, View, Image, StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    StatusBar
} from 'react-native';
import CallApi from '../Utils/CallApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from './../components/Login/Background';

const { width, height } = Dimensions.get('screen');

const HomeScreen = ({ navigation, route }) => {

    const { userToken } = route.params;
    const [ userData, setUserData ] = useState({});

    const test = 'xx'
    useEffect( () => {
        CallApi.authUserMe(userToken).then( async (res) => {
            if(res.auth === false){
                await AsyncStorage.setItem('@token_Key', '');
                navigation.replace('LoadingScreen', { headerMode: 'none' });
            }else{
                setUserData(res.data);
            }
        });

    }, []);

    //console.log('HOMESCREEN DATA USER ' + userData.fullname)

    return (
     <Background>
            <StatusBar hidden/>
            <SafeAreaView style={ styles.safeArea }>

            <Image source={ require('./../assets/Logo/logo.png') } style= { styles.logo } />
            <Text style={ styles.textHead }>
            <Text style={{ color: '#000000' }}>{ userData.fullname }</Text> đã sẵn sàng cùng Go To Pro thay đổi bản thân chưa, nếu rồi thì
            bắt đầu thôi nào?{' '}
            </Text>

            <View style = { styles.chooseOptions }>
                
                <TouchableOpacity
                    onPress={ () => { 
                        navigation.navigate('TodayDutyScreen', { fullname: userData.fullname }); // MOVE TO SCREEN TODY DUTIES
                    }} 
                >

                    <View style={ styles.chooseBox }>
                        <Text style={ styles.textButton }>
                            Làm gì hôm nay ?
                        </Text>
                        <Image source={ require('./../assets/whitearrowright.png') } style={ styles.imageOfButton }/>
                    </View>
                </TouchableOpacity>

            </View>

            <View style = { styles.chooseOptions }>
                
                <TouchableOpacity
                    onPress={ () => { 
                        navigation.navigate('TodayDutyScreen'); // MOVE TO SCREEN TODY DUTIES
                    }} 
                >

                    <View style={ styles.chooseBox }>
                        <Text style={ styles.textButton }>
                            Cảm hứng hôm nay ?
                        </Text>
                        <Image source={ require('./../assets/whitearrowright.png') } style={ styles.imageOfButton }/>
                    </View>
                </TouchableOpacity>

            </View>

            <View style = { styles.chooseOptions }>
                
                <TouchableOpacity
                    onPress={ async () => { 
                        await AsyncStorage.setItem('@token_Key', '');
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Main' }],
                          })
                        
                    }} 
                >

                    <View style={ styles.logoutBox }>
                        <Text style={ styles.textButton }>
                            Thoát
                        </Text>
                        <Image source={ require('./../assets/whitearrowright.png') } style={ styles.imageOfButton }/>
                    </View>
                </TouchableOpacity>

            </View>

            </SafeAreaView>
    </Background>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        resizeMode: 'contain',
        height: 250,
        width: 300,
        alignSelf: 'center'
    },
    textHead: {
        fontSize: 15,
        color: 'grey',
        fontWeight: 'bold',
        marginBottom: 20
    },
    chooseOptions: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    chooseBox: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#E42B6A',
        marginVertical: 10,
        marginHorizontal: 10,
        width: width - 100,
        height: 70,
        borderRadius: 10
    },
    logoutBox: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#3D3A62',
        marginVertical: 10,
        marginHorizontal: 10,
        width: width - 100,
        height: 70,
        borderRadius: 10
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center'
    },
    imageOfButton: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        marginLeft: 5
    }

});

export default HomeScreen;