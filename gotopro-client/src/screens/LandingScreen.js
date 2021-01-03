import React, { useEffect } from 'react';
import { Text, FlatList, Image, StatusBar, StyleSheet, View, Animated, Dimensions } from 'react-native';
import Button from './../components/Login/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('screen');

const bgs = ['#5CD859', '#ffcc00', '#8560F9'];
const DATA = [
  {
    key: '169986',
    title: 'Chào mừng bạn đến với Go To Pro',
    description: 'Chuyện gì sẽ đến với bạn vào ngày mai ?',
    image: 'https://i.imgur.com/FGo2OcE.png',
  },
  {
    key: '169985',
    title: 'Làm việc chăm chỉ',
    description: 'Nhận thành quả lớn trong cuộc sống',
    image: 'https://i.imgur.com/c9EdJV2.png',
  },
  {
    key: '169984',
    title: 'Nhiệm vụ và công việc',
    description: 'Hoàn thành xuất sắc',
    image: 'https://i.imgur.com/TVHl324.png',
  },
];

const Indicator = ({ scrollX }) => {
  return <View style={{ position: 'absolute', bottom: 200 , flexDirection: 'row' }}>
    { 
      DATA.map( (_, i) => {
        const inputRange = [(i - 1) * width, i*width, (i+1) * width]
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [ 0.8, 1.4, 0.8 ],
          extrapolate: 'clamp'
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: 'clamp'
        })

        return <Animated.View
            style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: '#fff', opacity, margin: 10, transform: [{ scale, }, ], }}
            key={`indicator-${i}`}
          />
      }) 
    }
  </View>
}

const Backdrop = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map( (_, i) => i * width ),
    outputRange: bgs.map( (bg) => bg ),
  })
  return (
    <Animated.View
      style={[ StyleSheet.absoluteFillObject, { backgroundColor }, ]}
    />
  )
}

const Square = ({ scrollX }) => {
  const YOLO = Animated.modulo(Animated.divide(
    Animated.modulo(scrollX, width),
    new Animated.Value(width)
  ), 1)

  const rotate = YOLO.interpolate({
    inputRange: [ 0, 0.5, 1 ],
    outputRange: [ '20deg', '0deg', '20deg' ]
  })

  const translateX = YOLO.interpolate({
    inputRange: [ 0, 0.5, 1 ],
    outputRange: [ 0, -height, 0 ]
  })

  return <Animated.View
    style={{ width: height, height: height, backgroundColor: '#fff', borderRadius: 86, position: 'absolute', top: -height * 0.6, left: -height * 0.3, transform: [{
      rotate,
    }, { translateX }  ] }}
  />
}

const LandingScreen = ({ navigation }) => {

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
  
  <View style={ styles.container }>
    <StatusBar hidden/>
    <Backdrop scrollX={ scrollX } />
    <Square scrollX={ scrollX } />
    <Animated.FlatList
      data={ DATA }
      keyExtractor={ item => item.key }
      horizontal
      showsHorizontalScrollIndicator={ false }
      contentContainerStyle={{ paddingBottom: 60 }}
      scrollEventThrottle={32}
      onScroll={ Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        {useNativeDriver: false}
      )}
      pagingEnabled
      renderItem={ ({ item }) => {
        return (
          <View style={{ width, alignItems: 'center', padding: 20 }}>

              <View style={{ flex: 0.7, justifyContent: 'center' }}>
                <Image source={{ uri: item.image }} style={{ width: width / 2, height: height / 2, resizeMode: 'contain' }}></Image>
              </View>

              <View style={{ flex: 0.3 }}>
                <Text style={{ color: '#fff', fontWeight: '800', fontSize: 24, marginBottom: 10 }}>
                  { item.title }
                </Text>

                <Text style={{ color: '#fff', fontWeight: '300' }}>
                  { item.description }
                </Text>

              </View>

          </View>
       );
      }}
    />
    <Indicator scrollX={ scrollX } />
    <Button 
      style= {{ backgroundColor: '#F96060', marginBottom: 10 }}
      mode='contained' 
      onPress={ () => navigation.navigate('LoginScreen') }
    >
      Đăng nhập
    </Button>
    <Button 
      onPress={ () => navigation.navigate('RegisterScreen') }
    >
      Đăng ký
    </Button>
  </View>
  
  )

};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex:1,
    paddingTop: 100,
    width: 110,
    height: 110,
    marginBottom: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LandingScreen;


