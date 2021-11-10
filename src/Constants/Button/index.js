import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../Utils';

export default function AppButton(props) {
    const { left, text, onPressed, large, loading, medium, small, icon } = props;
    return (
        <TouchableOpacity style={styles(props).container} onPress={onPressed}>
            <View style={styles(props).content}>
                {loading == true ? <ActivityIndicator color={Colors.White} />
                    :
                    <Text style={styles(props).textStyle}> {text} </Text>
                }
            </View>
            {left && <View style={styles(props).icon}>
                <Image source={icon} style={{ width: small ? 31 : 23, height: small ? 31 : 23, resizeMode: 'contain' }} />
            </View>}
        </TouchableOpacity>
    )
};

const styles = (props) => StyleSheet.create({
    container: {
        width: props.xlarge
            ? wp('90%')
            : props.large
                ? wp('80%')
                : props.mlarge
                    ? wp('80%')
                    : props.medium
                        ? wp('90%')
                        : props.small
                            ? wp('75%')
                            : wp('80%')

        ,
        height: props.xlarge
            ? hp(6)
            : props.large
                ? hp(7)
                : props.mlarge
                    ? hp(6)
                    : props.medium
                        ? hp(4.5)
                        : props.small
                            ? hp(5.5)
                            : hp(6)
        ,
        backgroundColor: Colors.Red,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: props.large ? 6 : 3,
        marginVertical: 10,
    },
    icon: {
        position: 'absolute',
        left: 20
    },
    textStyle: {
        color: '#ffffff',
        fontFamily: 'Helvetica',
        fontSize: props.small ? 15 : 18
    },
    content: {
        flexDirection: 'row',
    }
});