import React, { useState, useRef } from 'react'
import { TextInput, TextInputProps, View, Text, StyleSheet } from 'react-native'
import { Colors } from '../utils/colors'

export interface CustomTextInputProps extends TextInputProps {
  onSubmit: (value: string) => void
  handleOnChange?: (value: string) => void
  containerStyle?: object
  textStyle?: object
  labelStyle?: object
  label?:string
}

export default function CustomTextInput(props:CustomTextInputProps) {
  return (<View style={[styles.inputContainer, props.containerStyle]}>
      {props.label && <Text style={[styles.labelDefault]}>{props.label}</Text>}
      <TextInput
        {...props}
        numberOfLines={1}
        style={[styles.input, props.textStyle]}
      />
  </View>)
}

const styles = StyleSheet.create({
    input:{
        height: 30,
    },
    inputContainer:{
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 10,
    },
    labelDefault:{
        color: Colors.White
    }
})
