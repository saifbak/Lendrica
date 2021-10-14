import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image, } from 'react-native';

// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Constants----------------------------------------------------------------
import { Colors } from '../../Utils';

export default function AppBar(props) {
    const { name, profileImage, currentAmount } = props;
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.welcomeStyle}>Welcome</Text>
                <Text style={styles.nameStyle}>{name}</Text>
            </View>
            <View style={styles.box2}>
                <Image source={profileImage} style={styles.imageStyle} />
            </View>
            <View style={styles.box3}>
                <Text style={styles.walleryStyle}>Wallet Balance</Text>
                <Text style={styles.amountStyle}>{`$ ${currentAmount ? currentAmount : 0}`}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        alignSelf: "center",
        // alignContent: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(3),
        marginVertical: hp(1),
        width: wp('92%'),
        height: hp(9),
        backgroundColor: Colors.White,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowColor: Colors.Grey,
        shadowRadius: 4,
        elevation: 10,
    },
    box1: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: "space-around",
        height: hp(6),
        flex: 1,
    },
    box2: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    box3: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: "space-around",
        height: hp(6),
    },
    imageStyle: {
        width: wp('15.5%'),
        height: hp('8%'),
        resizeMode: 'cover',
        borderRadius: 100 / 2,
        borderWidth: 2.5,
        borderColor: Colors.Red,
    },
    welcomeStyle: {
        fontFamily: 'Helvetica',
        fontSize: 15.5,
        fontWeight: '100'
    },
    nameStyle: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 19,
    },
    amountStyle: {
        color: Colors.Grey,
        fontSize: 17,
    },
    walleryStyle: {
        fontFamily: 'Helvetica',
        fontSize: 15.5,
    }
})