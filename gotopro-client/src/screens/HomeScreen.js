import React from 'react';
import {
    Text, View, Image, StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native'

const width = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={ styles.safeArea }>

            <Image source={ require('./../assets/habitupv2.png') } style= { styles.logo } />
            <Text style={ styles.textHead }>
           Bạn đã sẵn sàng cùng Go To Pro thay đổi bản thân chưa, nếu rồi thì
            bắt đầu thôi nào?{' '}
            </Text>

            <View style = { styles.chooseOptions }>
                
                <TouchableOpacity
                    onPress={ () => { 
                        navigation.navigate('TodayDutyScreen'); // MOVE TO SCREEN TODY DUTIES
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

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'ivory'
    },
    logo: {
        alignSelf: 'center'
    },
    textHead: {
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
        backgroundColor: '#ff0066',
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