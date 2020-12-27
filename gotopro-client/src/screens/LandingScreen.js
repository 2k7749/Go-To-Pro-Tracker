import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const LandingScreen = ({ navigation }) => {
  const [align, setAlign] = useState('center');
  const [alignsecond, setAlignsecond] = useState(false);

    setTimeout(() => {
    setAlign('flex-start'), setAlignsecond(true);
    }, 1500);
  
    setTimeout( () => {
            navigation.replace('HomeScreen'); // Move to Home Page
    }, 3000);

  return (
    <View style={[styles.container, { justifyContent: align }]}>
      <Image
        source={ require('./../assets/Landing/logo.png') }
        style={{ width: 100, height: 100, borderRadius: 20 }}
      />
      {!alignsecond ? null : (
        <View style={{ margin: 10 }}>
          <Text style={ styles.basicText }>
            Go To PRO
          </Text>
        </View>
      )}
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 100,
  },
  basicText: {
    color: '#ff3300', 
    fontSize: 30, 
    fontWeight: 'bold'
  }
});
