import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';

// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icons } from '../../Assets';

// Constants----------------------------------------------------------------
import { Colors } from '../../Utils';

export default function FundBar(props) {
    const { balance } = props;
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.titleStyle}>Wallet Balance</Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.title2Style}>
                    {`${balance}`}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: "center",
        alignSelf: "center",
        marginVertical: hp(1),
        width: wp('92%'),
        height: hp(11),
        backgroundColor: Colors.White,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowColor: Colors.Grey,
        shadowRadius: 4,
        elevation: 10,
    },
    box1: {
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
        height: hp(4),
        backgroundColor: Colors.GoldenD
    },
    box2: {
        height: hp(7),
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',
    },
    titleStyle: {
        fontFamily: 'Helvetica',
        color: Colors.White,
    },
    title2Style: {
        fontFamily: 'Helvetica',
        fontSize: 22,
        fontWeight: '700',

    },
})