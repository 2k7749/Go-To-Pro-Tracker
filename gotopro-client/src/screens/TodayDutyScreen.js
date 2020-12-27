import React, { useEffect, useState } from 'react';
import {
    Text, View, Image, StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    FlatList,
} from 'react-native';

import DutyBox from '../components/DutyBox';

import CallApi from './../Utils/CallApi';

const screenWidth = Dimensions.get('window').width;

const TodayDutyScreen = ({ navigation, route }) => {
    const [ duties, setDuties ] = useState([]);
    const reqRefresh = route.params ? route.params.reqRefresh : null;

    const refreshDuties = async () => {
        const allDuties = await CallApi.getAllDuties();
        setDuties([...allDuties]);
    };

    useEffect( () => {
        refreshDuties(); // RUN
        console.log(reqRefresh);
    }, []);

    useEffect( () => {
        if(reqRefresh){
            refreshDuties(); // RUN
            console.log('REQUEST REFRESH RUN');
        }
    }, [route.params]);

    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.quoteBox }>
                <Text style={ styles.quoteText }>
                 “Không làm mà đòi có ăn chỉ có ăn đầu buoi ăn cut.”
                </Text>
                <Text> - Huấn Rose</Text>
            </View>
            <FlatList
                style={ styles.ListDuties }
                numColumns={ 2 } 
                data={ duties }
                keyExtractor={ ( item ) => item.dutyId }
                renderItem={ ({ item }) => (
                    <TouchableOpacity
                        onPress={ () => {
                            navigation.navigate('DutyDetailScreen', {
                                duty: item,
                            });
                        }}
                        >  
                    <DutyBox duty = { item } reqRefreshCallback={ refreshDuties } />
                    </TouchableOpacity>
                )}
                ListEmptyComponent={ 
                    <View>
                        <Text>
                            Add a New Task to get started with Habitator, the best habit
                            tracker out there !{' '}
                        </Text>
                    </View>
                }
            />
            <View style={ styles.navbar }>

                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={ require('./../assets/settingsgear.png') } 
                        style={ styles.imageBtn }
                    />
                    <Image
                        source={ require('./../assets/graphpresentation.png') } 
                        style={ styles.imageBtn }
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('DutyTypeScreen');
                    }}
                >
                <Text style={styles.newDutyBtn}>Thêm NV</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 80,
        backgroundColor: 'ivory',
        alignItems: 'center',
    },
    quoteBox: {
        padding: 20,
        marginBottom: 10,
    },
    quoteText: {
        color: 'grey',
        fontStyle: 'italic',
        alignSelf: 'flex-end'
    },
    ListDuties:{
        
    },
    navbar: {
        flex: 2,
        flexDirection: 'row',
        position: 'absolute',
        paddingHorizontal: 10,
        bottom: 0,
        width: screenWidth-10,
        alignSelf: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 20,
    },
    imageBtn: {
        width: 50,
        height: 50,
        marginHorizontal: 15,
        alignSelf: 'center',
    },
    newDutyBtn:{
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#1A535C',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
    }

});

export default TodayDutyScreen;