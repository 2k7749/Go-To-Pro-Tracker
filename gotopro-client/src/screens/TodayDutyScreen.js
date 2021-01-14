import React, { useEffect, useState } from 'react';
import {
    Text, View, StyleSheet, Image,
    SafeAreaView, Dimensions,
    TouchableOpacity,
    FlatList, ImageBackground,
} from 'react-native';

import { theme } from './../core/theme';

import DutyBox from '../components/DutyBox';

import CallApi from './../Utils/CallApi';

import Icon from 'react-native-vector-icons/Ionicons'; // MENU

import ActionButton from '@logvinme/react-native-action-button';

const { width, height } = Dimensions.get('screen');

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: '#64676D', borderLeftWidth: 1 }}></View>
        </View>
    )
}

const TodayDutyScreen = ({ navigation, route }) => {
    const [ duties, setDuties ] = useState([]);
    const reqRefresh = route.params ? route.params.reqRefresh : null;
    const { userToken, userId } = route.params;
    const refreshDuties = async () => {
        const allDuties = await CallApi.getAllDuties(userId);
        console.log(allDuties)
        setDuties([...allDuties]);
    };
    useEffect( () => {
        refreshDuties(); // RUN
    }, []);

    useEffect( () => {
        if(reqRefresh){
            refreshDuties(); // RUN
            console.log('REQUEST REFRESH RUN');
        }
    }, [route.params]);

    return (
        
        <ImageBackground
        source={ require('./../assets/Login/background_dot.png') }
        resizeMode='repeat'
        style={ styles.background }
        >
        <SafeAreaView style={ styles.container }>
            <View style={{ height: 200 }}>
                
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 24 }}>
                        <View style={{ flex: 1 }}>
                                <View style={{ marginRight: 24 }}>
                                    <Text style={{ fontSize: 18, color: 'black' }}>Good Morning!</Text>
                                    <Text style={{ fontSize: 20, color: 'red' }}>{ route.params.fullname }</Text>
                                </View>
                        </View>
                         {/* Points */}
                         <TouchableOpacity
                            style={{
                                backgroundColor: '#F96D41',
                                height: 40,
                                paddingLeft: 3,
                                paddingRight: 12,
                                borderRadius: 20
                            }}
                            onPress={() => { console.log("Point") }}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                    <Image
                                        source={ require('./../assets/Logo/logo.png') }
                                        resizeMode="contain"
                                        style={{
                                            width: 20,
                                            height: 20
                                        }}
                                    />
                                </View>

                                <Text style={{ marginLeft: 8, color: 'white' }}>200 điểm</Text>
                            </View>
                        </TouchableOpacity> 

                </View>

                  {/* BoardAnalytics */}
                <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
                <View style={{ flexDirection: 'row', height: 70, backgroundColor: '#25282F', borderRadius: 21 }}>
                    {/* Claim */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Claim")}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={ require('./../assets/tick.png') }
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: 8, color: 'white' }}>0</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    {/* Get Point */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Get Point")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <View style={{ borderRadius: 15, borderWidth: 1, overflow: 'hidden' }}>
                            <Image
                                source={ require('./../assets/todolist.gif') }
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                            </View>
                            <Text style={{ marginLeft: 8, color: 'white' }}>0</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    {/* My Card */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("My Card")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                             <View style={{ borderRadius: 15, borderWidth: 1, overflow: 'hidden' }}>
                            <Image
                                source={ require('./../assets/user.gif') }
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            </View>
                            <Text style={{ marginLeft: 8, color: 'white' }}>Tài khoản</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                </View>

            </View>
        </SafeAreaView>

        <View style={styles.dutyContainer}>
        <FlatList
                style ={{ flex:1 }}
                numColumns={ 2 } 
                data={ duties }
                keyExtractor={ ( item, index ) => `feed_${index}` }
                renderItem={ ({ item }) => (
                    <TouchableOpacity
                        onPress={ () => {
                            navigation.navigate('DutyDetailScreen', {
                                duty: item,
                                userToken: userToken
                            });
                        }}
                        >  
                    <DutyBox duty = { item } reqRefreshCallback={ refreshDuties } />
                    </TouchableOpacity>
                )}
                ListEmptyComponent={ 
                    <View style={{ padding: 20 }}>
                        <Text>
                            Hiện tại bạn chưa có <Text style={{ color:'red' }}>Mục Tiêu</Text>, hãy đặt mục tiêu và hoàn thành nó để hoàn thiện bản thân một cách tốt nhất!{' '}
                        </Text>
                    </View>
                }
            />
        </View>
            
            <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item buttonColor='#9b59b6' title="Thêm mới" onPress={() => { navigation.navigate('DutyTypeScreen', { userToken: userToken, userId: userId }) }}>
                    <Icon name="md-create" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Thông báo" onPress={() => {}}>
                    <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c' title="Nhiệm vụ" onPress={() => {}}>
                    <Icon name="md-done-all" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>

        
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.surface,
    },
    headerText: {
        fontSize: 45,
        fontWeight: 'bold',
        paddingLeft: 20
    },
    headerImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    logo: {
        resizeMode: 'contain',
        height: 90,
        width: 130,
        alignSelf: 'center'
    },
    dutyContainer:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 12,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    

});

export default TodayDutyScreen;