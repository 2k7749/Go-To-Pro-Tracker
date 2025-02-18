import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from './../../core/theme'

const TextInput = ({ errorText, description, ...props }) => (
    
    <View style={ styles.container }>
        <Input
        style={ styles.input }
        selectionColor={ theme.colors.primary }
        underlineColor='transparent' 
        mode='outlined'
        theme={{ colors: { primary: '#00B386' } }}
        { ...props }
        />
        {  description && !errorText ? (
            <Text style={ styles.description }>{ description }</Text>
        ) : null}
        { errorText ? <Text style={ styles.error } >{ errorText }</Text> : null }
    </View>

)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '100%',
        marginVertical: 12,
    },
    input: 
    {
        backgroundColor: theme.colors.surface,
    },
    description: {
        fontSize: 13,
        color: theme.colors.secondary,
        paddingTop: 8,
    },
    error: {
        fontSize: 13,
        color: theme.colors.error,
        paddingTop: 8,
    },
})

export default TextInput;