import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = ({ navigation }) => {

      useEffect(() => {
      storage();
      }, []);

      const storage = async () => {
        let items = await AsyncStorage.getItem('@token_Key');
        if(items){
          navigation.replace('HomeScreen', { userToken : items })
        }else{
          navigation.replace('Main')
        }
      }  

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
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