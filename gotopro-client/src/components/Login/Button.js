import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from './../../core/theme';

const Button = ({ mode, style, ...props }) => (
    <PaperButton 
        style={[ 
            styles.button,
            mode === 'outlined',
            style,
        ]}
        labelStyle={ styles.text }
        mode={ mode }
        { ...props }
    />
)

const styles = StyleSheet.create({
    button: {
        bottom: 50,
        width: '70%'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    }
});

export default Button;