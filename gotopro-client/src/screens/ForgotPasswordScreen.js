import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Background from './../components/Login/Background';
import Header from './../components/Login/Header';
import Button from './../components/Login/Button';
import TextInput from './../components/Login/TextInput';
import { emailValidator } from './../helpers/emailValidator';

const ForgotPasswordScreen = ( () => {
  
    const [ email, setEmail ] = useState({ value: '', error: '' })

    const sendResetPasswordEmail = () => {
        const emailError = emailValidator(email.value)
        if(emailError){
            setEmail({ ...email, error:emailError })
            return
        }
        navigation.navigate('LoginScreen')
    }

    return (
        <Background>
        <Header>Khôi phục mật khẩu</Header>
        <Text style={ styles.textsmall }>
            Vui lòng điền địa chỉ Email của bạn vào bên dưới chúng
            tôi sẽ gửi một mật khẩu mới cho bạn
        </Text>
        <TextInput
            label='Địa chỉ email'
            returnKeyType='done'
            value={ emailValidator.value }
        />
        <View style={ styles.viewBtn }>
            <Button
                mode='contained'
                onPress={ sendResetPasswordEmail }
                style={ styles.btnForget }
            >
                <Text style={ styles.textForget }>Gửi yêu cầu</Text>
            </Button>
        </View>
        
        </Background>
    )
})

const styles = StyleSheet.create({
    textsmall: {
        padding: 20,
        color: '#757a7a'
    },
    viewBtn: { 
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    btnForget:{
        backgroundColor: '#F96060',
        bottom: 50,
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textForget: {
        color: '#fff',
    }
})

export default ForgotPasswordScreen;
