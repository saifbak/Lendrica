import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';

// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icons } from '../../Assets';
import { Colors } from '../../Utils';


export default function AppTextInput(props) {
    const { placeholder, onChangedText, value, icon, validation, secureEntry, validationText } = props;
    const [hide, setHide] = useState(secureEntry);
    const handleHidden = () => {
        setHide(!hide)
    }
    return (
        <View style={styles(props).container}>
            {<View>

            </View>}
            <View style={styles(props).textInputView}>
                <TextInput
                    placeholder={placeholder}
                    onChangeText={onChangedText}
                    value={value}
                    style={styles(props).textInputStyle}
                    secureTextEntry={hide && true}
                />
                {icon && <TouchableOpacity style={styles(props).textInputIcon} onPress={handleHidden}>
                    <Image source={hide ? Icons.hidden : Icons.show} style={{ width: 22, height: 22, resizeMode: 'contain' }} />
                </TouchableOpacity>}
            </View>
            {validation && <Text style={styles(props).textValidationStyle}>{validationText}</Text>}
        </View>
    );
};

const styles = (props) => StyleSheet.create({
    container: {
        flexDirection: "column",
        height: hp(6),
        width: wp('80%'),
        backgroundColor: Colors.LightGrey,
        justifyContent: 'flex-start',
        borderRadius: 3,
        marginVertical: 10,
    },
    textInputView: {
        flexDirection: 'row',
        width: wp('80%'),
        height: hp(6),
    },
    textInputStyle: {
        backgroundColor: Colors.LightGrey,
        color: Colors.Grey,
        fontFamily: 'Helvetica',
        fontSize: 17,
        width: wp('70%'),
        height: hp(6),
        paddingHorizontal: 10,
        borderRadius: 4,
    },
    placeholderStyle: {
        color: Colors.Grey,
        fontFamily: 'Helvetica'
    },
    textInputIcon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightImage: {
        height: 15,
        width: 20
    },
    textValidationStyle: {
        color: Colors.Red,
        fontSize: 12,
        paddingVertical: 3,
        paddingHorizontal: 3,
    }
});