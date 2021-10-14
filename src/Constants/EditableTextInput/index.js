import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Platform } from 'react-native';
import { Icons } from '../../Assets';


// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../Utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { tSParenthesizedType } from '@babel/types';

export default function EditableTextInput(props) {
    const [show, setShow] = useState(false)
    const { icon, placeholder, value, onChangedText, leftIcon, rightIcon, hideIcon } = props;
    return (
        <View style={styles(props).container}>
            {leftIcon && <Image source={icon} style={styles(props).iconStyle} />}
            <TextInput secureTextEntry={show ? true : false} placeholder={placeholder} value={value} onChangeText={onChangedText} style={styles(props).textInputStyle} />
            {rightIcon &&
                <TouchableOpacity onPress={() => setShow(!show)} >
                    <Image source={show ? icon : hideIcon} style={styles(props).iconStyle} />
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = props => StyleSheet.create({
    container: {
        flexDirection: 'row',
        // width: '90%',
        alignItems: 'center',
        justifyContent: props.rightIcon ? 'center' : 'space-around',
        padding: 10,
        // paddingHorizontal: 10,
    },
    iconStyle: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    textInputStyle: {
        width: props.rightIcon ? wp('80%') : wp('70%'),
        height: Platform.OS === 'android' ? hp(5) : hp(4),
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
})