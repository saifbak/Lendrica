import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Colors } from '../../Utils';

// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { Icons } from '../../Assets';

export default function AppHeader(props) {
    const { left, text, onPressed, right, logo, leftIcon, rightIcon, rightPressed } = props;
    return (
        <LinearGradient colors={[Colors.GoldenD, Colors.GoldenL,]} style={styles.container}>
            <View style={styles.container}>
                <View style={styles.box1}>
                    <TouchableWithoutFeedback onPress={onPressed}>
                        <Image source={leftIcon} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.box2}>
                    {text && <Text style={styles.textStyle}>{text}</Text>}
                    {logo &&
                        <View style={styles.logoStyle}>
                            <Image source={Icons.hlg} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                            <Image source={require('../../Assets/Icons/hbg1.png')} style={{ width: wp('40%'), height: hp(4), resizeMode: 'center' }} />

                        </View>}
                </View>
                <View style={styles.box3}>
                    <TouchableWithoutFeedback onPress={rightPressed}>
                        <Image source={rightIcon} style={{ width: 25, height: 25, resizeMode: 'contain', tintColor: Colors.White }} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp(8),
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    box1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box2: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.White,
    },
    logoStyle: {
        flexDirection: "row",
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: "center",
    }
})