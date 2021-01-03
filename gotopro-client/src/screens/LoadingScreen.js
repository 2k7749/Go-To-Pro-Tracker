import React, { useEffect } from 'react';
import { Text, FlatList, Image, StatusBar, StyleSheet, View, Animated, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = ({ navigation }) => {

    
  useEffect(() => {
    const storage = async()=>{
      let items = await AsyncStorage.getItem('@token_Key');
      if(items){
        navigation.replace('HomeScreen', { userToken : items })
      }
    }
  storage()
  }, []);

    return (
        <View style={{ flex: 1 }}>
             <Image
                                source={ require('./../assets/loading.gif') }
                                resizeMode="contain"
                                style={{
                                    width: '100%',
                                    height: '100%'
                                }}
            />
        </View>
    );
};

export default LoadingScreen;