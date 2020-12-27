import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import DutyType from '../components/DutyType';

const dutyTypes = [
    { label: 'time', description: 'Theo dõi mục tiêu' },
    { label: 'count', description: 'Mục tiêu thực hiện nhiều lần' },
    { label: 'check', description: 'Mục tiêu thực hiện 1 lần' },
  ];

const DutyTypes = ({ navigation }) => {
    return (
        <SafeAreaView style= { styles.container }>
            <View>
                <FlatList
                    style={ styles.container }
                    data={ dutyTypes }
                    keyExtractor={ (item) => item.label }
                    renderItem={ ({ item }) => (
                        <TouchableOpacity onPress={ () => {
                            navigation.navigate('AddDutyScreen', {
                                type: item.label
                            });
                        }}
                        >
                            <DutyType type={ item.label } description={ item.description }>
                            {' '}
                            </DutyType>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        backgroundColor: 'ivory',
    }
})

export default DutyTypes;