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

import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('screen');

const HomeScreen = ({ navigation, route }) => {

    const { userToken } = route.params;
    const [ userData, setUserData ] = useState({});
    const [ userNotiToken, setUserNotiToken ] = useState('');

    useEffect( () => {
        CallApi.authUserMe(userToken).then( async (res) => {
            if(res.auth === false){
                await AsyncStorage.setItem('@token_Key', '');
                navigation.replace('LoadingScreen', { headerMode: 'none' });
            }else{
                setUserData(res.data);
            }
        });
        registerForPushNotificationsAsync();
    }, []);

    //console.log('HOMESCREEN DATA USER ' + userData.fullname)



//   useEffect( () => {
    
//     (async () => {
//       const user = await firebase.collection("users")
//       .doc( firebase.auth().currentUser.uid )
//       .get();

//       setCurrentUser(user.data())
//     })();

//   });

//   useEffect( () => {
//     ( () => )();
//   }, []) // RUN CREATE TOKEN EXPO NOTIFICATIONS

  const registerForPushNotificationsAsync = async () => {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    const notiTokenis = {
        userid: userData._id,
        notiToken: token
    };


    if(token && userData.notiToken == ''){
        try{
            CallApi.addNotiToken(notiTokenis).then( (res) => {
                if(res.success === true){
                    setUserNotiToken(res.notiToken);
                    console.log(res.success)
                }
            })
        }catch( err ){
            console.log( err );
        }
    }
    
    console.log(userNotiToken);

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }
  

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