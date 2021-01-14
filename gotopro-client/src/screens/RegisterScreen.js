import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Alert, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import Background from './../components/Login/Background';
import Header from './../components/Login/Header';
import Button from './../components/Login/Button';
import TextInput from './../components/Login/TextInput';
import { theme } from './../core/theme';
import { emailValidator } from './../helpers/emailValidator';
import { passwordValidator } from './../helpers/passwordValidator';
import { nameValidator } from './../helpers/nameValidator';
import { usernameValidator } from '../helpers/usernameValidator';
import CallApi from './../Utils/CallApi';
import { call } from 'react-native-reanimated';

const RegisterScreen = ({ navigation }) => {

    const [ fullname, setFullName ] = useState({ value: '', error: '' })
    const [ username, setUserName ] = useState({ value: '', error: '' })
    const [ email, setEmail ] = useState({ value: '', error: '' })
    const [ password, setPassword ] = useState({ value: '', error: '' })

    const onSignUpPressed = () => {
        
        const fullnameError = nameValidator(fullname.value)
        const usernameError = usernameValidator(username.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)

        if(usernameError || emailError || fullnameError || passwordError){
            setUserName({ ...username, error: usernameError })
            setFullName({ ...fullname, error: fullnameError })
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }

        const signupBody = {
            fullname: fullname.value,
            username: username.value,
            email: email.value,
            password: password.value,
            userDuties: [],
        };

        CallApi.signupUser(signupBody).then( (res) => {
            if(res.verify === true){
                Alert.alert('Thông báo', 'Đăng ký tài khoản thành công',
                [
                    { text: 'OK', onPress: () => navigation.reset({ index: 0, routes: [{ name: 'Main'}] }) }
                  ],
                  { cancelable: false }
                )
            }else{
                Alert.alert('Thông báo', res.message,
                [
                    { text: 'OK' }
                  ],
                  { cancelable: false }
                )
            }
        })
    }

    return (
        <Background>
            <Header>Tạo tài khoản</Header>
            <ScrollView>
            <TextInput
                label="Họ và Tên"
                returnKeyType="next"
                value={ fullname.value }
                onChangeText={ (text) => setFullName({ value: text, error: '' }) }
                error={ !!fullname.error }
                errorText={ fullname.error }
            />
            <TextInput
                label="Tên tài khoản ( đăng nhập )"
                returnKeyType="next"
                value={ username.value }
                onChangeText={ (text) => setUserName({ value: text, error: '' }) }
                error={ !!username.error }
                errorText={ username.error }
                autoCapitalize='none'
                autoCompleteType='username'
                textContentType='username'
                keyboardType='email-address'
            />
            <TextInput
                label="Email"
                returnKeyType="next"
                value={ email.value }
                onChangeText={ (text) => setEmail({ value: text, error: '' }) }
                error={ !!email.error }
                errorText={ email.error }
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
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
            </ScrollView>
            <View style={ styles.viewBtn }>
                <Button
                    mode="contained"
                    onPress={onSignUpPressed}
                    style={ styles.btnRegister }
                >
                   <Text style={ styles.textRegister }>Đăng ký</Text> 
                </Button>
                <View style={ styles.row }>
                    <Text>Bạn đã có tài khoản ?</Text>
                    <TouchableOpacity onPress={ () => navigation.replace('LoginScreen') }>
                        <Text style={ styles.link }> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            

        </Background>
    )

}

const styles = StyleSheet.create({
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
    viewBtn: { 
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 4
    },  
    btnRegister:{
        backgroundColor: '#F96060',
        bottom: 50,
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRegister: {
        color: '#fff',
    }
})

export default RegisterScreen;