import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from './../../core/theme'

const Header = (props) => <Text style={ styles.header } { ...props } />

const styles = StyleSheet.create({
  header: {
    padding: 20,
    fontSize: 30,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})

export default Header;