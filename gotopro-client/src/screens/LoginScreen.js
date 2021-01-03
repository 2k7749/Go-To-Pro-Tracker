import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import Background from './../components/Login/Background';
import Header from './../components/Login/Header';
import Button from './../components/Login/Button';
import TextInput from './../components/Login/TextInput';
import { theme } from './../core/theme';
import { usernameValidator } from './../helpers/usernameValidator';
import { passwordValidator } from './../helpers/passwordValidator';
import CallApi from './../Utils/CallApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {

    const [ username, setUsername ] = useState({ value: '', error: '' })
    const [ password, setPassword ] = useState({ value: '', error: '' })

    const [ loginStatus, setLoginStatus ] = useState(false)

    const onLoginpressed = () => {
        const usernameError = usernameValidator(username.value)
        const passwordError = passwordValidator(password.value)
        if (usernameError || passwordError) {
          setUsername({ ...username, error: usernameError })
          setPassword({ ...password, error: passwordError })
          return
        }
        const loginUserBody = {
            username: username.value,
            password: password.value
        };
        CallApi.authUser(loginUserBody).then( async (res) => {
            if(res.auth){
                console.log(res);
                setLoginStatus(true);
                await AsyncStorage.setItem(
                    '@token_Key',
                    res.token
                )
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'LoadingScreen' }],
                  })
            }else{
                Alert.alert('Thông báo', res.message,
                [
                    { text: 'OK' }
                  ],
                  { cancelable: false }
                )
                setLoginStatus(false);
            }
        })
        .catch( (err) => { console.log(err); } )
            
    }
    //console.log('Login Screen test Token set'+loginToken);

    return (
        <Background>
            <Header>Chào mừng bạn đã trở lại</Header>
            <Text style={ styles.textsmall }>Đăng nhập để tiêp tục</Text>
            <TextInput 
                label='Tên tài khoản'
                returnKeyType='next'
                value={ username.value }
                onChangeText={ (text) => setUsername({ value: text, error: '' }) }
                error={ !!username.error }
                errorText={ username.error }
                autoCapitalize='none'
                autoCompleteType='username'
                textContentType='username'
                keyboardType='email-address'
            />
            <TextInput
                label="Mật khẩu"
                returnKeyType="done"
                value={ password.value }
                onChangeText={ (text) => setPassword({ value: text, error: '' }) }
                error={ !!password.error }
                errorText={ password.error }
                secureTextEntry
            />

            <View style={ styles.forgotPassword }>
                <TouchableOpacity
                    onPress={ () => navigation.navigate('ForgotPasswordScreen') }
                >
                    <Text style={ styles.forgot }>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>

            <View style={ styles.viewBtn }>
                <Button style={ styles.btnLogin } mode='contained' onPress={ onLoginpressed }>
                    <Text style={ styles.textLogin }>Đăng nhập</Text>
                </Button>
                <View style={ styles.row }>
                <Text>
                    Bạn không có tài khoản ? 
                </Text>
                <TouchableOpacity onPress={ () => navigation.replace('RegisterScreen') }>
                    <Text style={ styles.link }> Đăng ký</Text>
                </TouchableOpacity>
            </View>
            </View>
            

          
           
        </Background>
    )


}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    forgot: {
      paddingRight: 20,
      fontSize: 13,
      color: theme.colors.secondary,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 4
    },  
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
    textsmall: {
        padding: 20,
        color: '#757a7a'
    },
    viewBtn: { 
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    btnLogin:{
        backgroundColor: '#5ABB56',
        bottom: 50,
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLogin: {
        color: '#fff',
    }
  });
  

export default LoginScreen;