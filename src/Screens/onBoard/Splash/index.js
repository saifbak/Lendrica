import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '../../../Assets';

// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
// Constants----------------------------------------------------------------
import AppButton from '../../../Constants/Button';
// import { useNavigation } from '@react-navigation/native'
export default function Splash(props) {
    // const navigation = useNavigation();
    useEffect(() => {
        // setTimeout(() => {
        //     navigation.navigate('Welcome');
        // }, 1500)
    })
    return (
        <View style={styles.container}>
            <ImageBackground source={Icons.bg} style={styles.bgImageStyle} >
                <View style={styles.content1}>
                    {/* <Text style={styles.textStyle}>Welcome to</Text> */}
                    <View style={styles.logoStyle}>
                        <Animatable.Image animation={'slideInDown'} source={Icons.hlogo} style={{ width: wp(20), height: hp(11), resizeMode: 'contain' }} />
                        <Animatable.Image animation={'slideInUp'} source={Icons.brand} style={{ width: wp(64), height: hp(11), resizeMode: 'center' }} />
                    </View>
                </View>
                <View style={styles.content2}>
                    {/* <View style={styles.box1} /> */}
                    {/* <View style={styles.box2}>
                        <AppButton large text="Sign In" onPressed={() => navigation.navigate('Login')} />
                        <AppButton large text="Sign Up" onPressed={() => navigation.navigate('Role')} />
                    </View> */}
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    bgImageStyle: {
        height: hp('100%'),
        width: wp('100%'),
    },
    content1: {
        flex: 5,
        // top: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content2: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'red',
    },
    textStyle: {
        fontFamily: 'Helvetica',
        fontSize: 19,
    },
    logoStyle: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    box1: {
        flex: 1,
        // backgroundColor: 'pink',
    },
    box2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'purple',
    }
})