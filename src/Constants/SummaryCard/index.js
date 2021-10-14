import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native';
// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../Utils';

export default function SummaryCard(props) {
    const { title, images, value } = props;
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={{ fontFamily: 'Helvetica', fontSize: 12, color: Colors.Grey }}>{title}</Text>
                <Text style={{ fontFamily: 'Helvetica', fontSize: 15, color: Colors.Charcol, fontWeight: '700' }}>{`${value}`}</Text>
            </View>
            <View>
                <Image source={images} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: wp('42%'),
        height: hp(10),
        backgroundColor: 'white',
        marginEnd: 5,
        marginStart: 5,
        marginVertical: 10,
        shadowColor: Colors.Grey,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        borderRadius: 4,
        elevation: 10,
    },
    content: {
        height: hp(7),
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        // backgroundColor: Colors.Red
    }
})