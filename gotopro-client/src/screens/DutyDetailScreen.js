import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  ImageBackground,
  Dimensions,
  Animated,
  TouchableOpacity
} from 'react-native';
import CallApi from './../Utils/CallApi';
import DutyCalendar from './../components/DutyCalendar';
import { theme } from './../core/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('screen');

const DutyDetailScreen = ({ navigation, route }) => {
  const { duty } = route.params;
  const id = duty._id;
  
  const [ historyMarked, setHistory ] = useState({});
  const refreshgetHistory = async () => {
    const allHistory = await CallApi.getHistoryDuty(id);
    setHistory({...allHistory});
  };

  const [ scrollViewWholeHeight, setScrollViewWholeHeight ] = useState(1);
  const [ scrollViewVisibleHeight, setScrollViewVisibleHeight ] = useState(0);

  const indicator = new Animated.Value(0);

  const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ?
  scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight

  const difference =scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1

  useEffect( () => {
    refreshgetHistory(); // RUN
    //console.log(historyMarked);
  }, []);

  const dutyColorBackground = {
    backgroundColor: duty.color,
  };

  const createDate = () => {
    const cdate = new Date(duty.creationDate);
    const cyear = cdate.getFullYear().toString();
    const cmonth = cdate.getMonth().toString();
    const cday = cdate.getDate().toString();
    return `${cday} / ${cmonth} / ${cyear}`;
  };

  const confirmDel = ( id ) => {
    Alert.alert(
      'Xoá mục tiêu',
      'Bạn chắc chắn muốn xoá ?',
      [
        {
          text: 'Huỷ',
          style: 'cancel',
        },{
          text: 'Xoá',
          onPress: () => {
            handleDeleteDuty(id);
          },
        },
      ],
      { cancelable: false },
    );
  };


  const handleDeleteDuty = ( idInputToDelete ) => {
    const reqRefresh = true;

    CallApi.deleteDuty( idInputToDelete ).then( () => {
      navigation.navigation(' TodayDuties ', { reqRefresh });
    });
  };

  const handleEditDuty = ( id ) => {
    const reqRefresh = true;
  }

  return(
    <ImageBackground
            source={ require('./../assets/Login/background_dot.png') }
            resizeMode='repeat'
            style={ styles.background }
        >
    <SafeAreaView style={[ styles.container, {borderColor: duty.color } ]}>

          <DutyCalendar duty={ duty } hismarked = { historyMarked } />

          
          <View style={{ paddingTop: 30 }}>
            <View style={{ 
              backgroundColor: '#1C1921',
              height: height / 2.3,
              borderRadius: 15,    
              padding: 20,
              width: width - 30,    
              position: 'relative', 
            }}> 
            <View style={{ 
              flex: 2,
              position: 'absolute',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              top: -height / 2.3,
              right: 0,
              left: 0,
              bottom: 0,
            }}>
              <Text style={styles.infoLabel}>Thông tin mục tiêu</Text>
            </View>
            
              <View style={{ paddingTop: 30, flex: 1, flexDirection: 'row', padding: 24 }}>
                {/* ScrollBar CUstomize */}
                  <View style={{ width: 4, height: '100%', backgroundColor: '#282C35' }}>
                  <Animated.View 
                    style={{ 
                      width: 4,
                      height: indicatorSize,
                      backgroundColor: '#7D7E84',
                      transform: [{
                        translateY: Animated.multiply( indicator,
                          scrollViewVisibleHeight / scrollViewWholeHeight )
                          .interpolate({
                            inputRange: [ 0, difference ],
                            outputRange: [ 0, difference ],
                            extrapolate: 'clamp'
                          })
                      }]
                    }}
                  />
                
                </View>

                <ScrollView contentContainerStyle={{ paddingLeft: 10 }}
                  showsVerticalScrollIndicator={ false }
                  scrollEventThrottle={ 16 }
                  onContentSizeChange={ (width, height) => {
                    setScrollViewWholeHeight(height)
                  }}
                  onLayout={({ nativeEvent: { layout: { x, y, width, height }}}) => {
                    setScrollViewVisibleHeight(height)
                  }}
                  onScroll={ Animated.event(
                    [{ nativeEvent: { contentOffset: {y: indicator} } }],
                    { useNativeDriver: false }
                  )}
                >
                  <Text style={{ fontSize: 22, lineHeight: 30, marginBottom: 18, color: '#ffffff' }}>Lý do:</Text>
                  <Text style={{ fontSize: 20, lineHeight: 30, color: '#64676D' }}>{ duty.description }</Text>
                  <Text style={{ fontSize: 22, lineHeight: 30, marginBottom: 18, color: '#ffffff' }}>Loại mục tiêu:</Text>
                  <Text style={{ fontSize: 20, lineHeight: 30, color: '#64676D' }}>{ duty.type == 'time' ? 'Thời gian' : duty.type == 'count' ? 'Đếm số lần' : 'Đánh dấu'}</Text>
                  <Text style={{ fontSize: 22, lineHeight: 30, marginBottom: 18, color: '#ffffff' }}>Phải thực hiện được:</Text>
                  <Text style={{ fontSize: 20, lineHeight: 30, color: '#64676D' }}>{ duty.goal }</Text>
                  <Text style={{ fontSize: 22, lineHeight: 30, marginBottom: 18, color: '#ffffff' }}>Ngày tạo:</Text>
                  <Text style={{ fontSize: 20, lineHeight: 30, color: '#64676D' }}>{ createDate() }</Text>

                  <Text style={{ fontSize: 22, lineHeight: 30, marginBottom: 18, color: '#ffffff' }}>Tiến độ:</Text>
                  <Text style={{ marginLeft: 10 }}>
                    <Text style={{ marginLeft: 10, fontSize: 20, lineHeight: 30, marginBottom: 18, color: '#ffffff' }}>Số lần đã thực hiện: </Text>
                    <Text style={{ fontSize: 18, lineHeight: 30, color: '#64676D' }}>{ duty.currentStreak }</Text>
                  </Text>
                  <Text style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 20, lineHeight: 30, marginBottom: 18, color: '#ffffff' }}>Tổng số cần thực hiện: </Text>
                    <Text style={{ fontSize: 18, lineHeight: 30, color: '#64676D' }}>{ duty.maxStreak }</Text>
                  </Text>
                  
                </ScrollView>
                              
              </View>
              <View style={{ height: 60, marginBottom: 5 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity
                              style={{
                                width: 60,
                                backgroundColor: '#25282F',
                                marginLeft: 24,
                                marginVertical: 8,
                                borderRadius: 12,
                                alignItems: 'center',
                                justifyContent: 'center' 
                              }}
                              onPress={ () => confirmDel(id) }
                            >
                              <Image
                                source={ require('./../assets/deletewhite.png') }
                                resizeMode='contain'
                                style={{
                                  width: 25,
                                  height: 25,
                                  tintColor: '#EFEFF0'
                                }}
                              />
                            </TouchableOpacity>

                            <TouchableOpacity
                              style={{  
                                flex: 1,
                                backgroundColor: '#F96D41',
                                marginHorizontal: 8,
                                marginVertical: 8,
                                borderRadius: 12,
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                              onPress={ () => handleEditDuty(id)}
                            >
                                <Text style={{ fontSize: 16, lineHeight: 22, color: 'white' }}>
                                  Sửa mục tiêu
                                </Text>
                            </TouchableOpacity>

                    </View>
              </View>

            </View>
          </View>
    </SafeAreaView>
    </ImageBackground>
  )

};

const styles = StyleSheet.create({
  container:{
    
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 20,
  },
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  infoLabel: {
    backgroundColor: '#3DDC84',
    padding: 10,
    borderRadius: 10,
    fontSize: 28,
    color: 'black',
    marginVertical: 20,
    alignContent: 'center',
  }
});

export default DutyDetailScreen;