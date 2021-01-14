import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import DutyType from '../components/DutyType';
import { theme } from './../core/theme';

const dutyTypes = [
    { label: 'time', title: 'Thời gian', description: 'Theo dõi mục tiêu' },
    { label: 'count', title: 'Đếm số lần', description: 'Mục tiêu thực hiện nhiều lần' },
    { label: 'check', title: 'Đánh dấu', description: 'Mục tiêu thực hiện 1 lần' },
  ];

const DutyTypes = ({ navigation, route }) => {
    const { userToken, userId } = route.params;

    return (
        <ImageBackground
            source={ require('./../assets/Login/background_dot.png') }
            resizeMode='repeat'
            style={ styles.background }
        >
        <SafeAreaView style= { styles.container }>
            <View>
                <FlatList
                    style={{ alignContent: 'center' }}
                    data={ dutyTypes }
                    keyExtractor={ (item) => item.label }
                    renderItem={ ({ item }) => (
                        <TouchableOpacity onPress={ () => {
                            navigation.navigate('AddDutyScreen', {
                                type: item.label,
                                userToken: userToken,
                                userId: userId,
                            });
                        }}
                        >
                            <DutyType type={ item.label } title={ item.title }  description={ item.description }>
                            {' '}
                            </DutyType>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50
    },
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.surface,
    }
})

export default DutyTypes;