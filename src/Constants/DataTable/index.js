import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// Libraries----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Utils----------------------------------------------------------------
import { Colors } from '../../Utils';

export default function DataTable(props) {
    const { text } = props;
    return (
        <View style={styles.container}>
            <View style={styles.titleSectionStyle} onPress={() => setCollapsed(!collapsed)}>
                <Text style={styles.titleStyle}>{text}</Text>
            </View>
            <View style={styles.itemSectionStyle}>
                <View style={styles.itemsStyles}>
                    <Text style={styles.itemTextStyle}>{'Oct 31'}</Text>
                    <Text style={styles.itemTextStyle}>{'Added Funds'}</Text>
                    <Text style={styles.itemTextStyle}>{'$2000'}</Text>
                </View>
                <View style={styles.itemsStyles}>
                    <Text style={styles.itemTextStyle}>{'Nov 01'}</Text>
                    <Text style={styles.itemTextStyle}>{'Withdraw Funds'}</Text>
                    <Text style={styles.itemTextStyle}>{'$1000'}</Text>
                </View>
                <View style={styles.itemsStyles}>
                    <Text style={styles.itemTextStyle}>{'Nov 02'}</Text>
                    <Text style={styles.itemTextStyle}>{'Invested Funds'}</Text>
                    <Text style={styles.itemTextStyle}>{'$4000'}</Text>
                </View>
                <View style={styles.itemsStyles}>
                    <Text style={styles.itemTextStyle}>{'Nov 03'}</Text>
                    <Text style={styles.itemTextStyle}>{'Added Funds'}</Text>
                    <Text style={styles.itemTextStyle}>{'$5000'}</Text>
                </View>
            </View>
            <View style={styles.paginationStyle}>
                <TouchableWithoutFeedback style={styles.buttons} >
                    <Text style={styles.buttonTextStyle}>{'< Previous Page'}</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.buttons} >
                    <Text style={styles.buttonTextStyle}>{'Next Page >'}</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.statementStyles}>
                <TouchableWithoutFeedback style={styles.buttons1} >
                    <Text style={styles.button1TextStyle}>{'Save as PDF'}</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.buttons2} >
                    <Text style={styles.button2TextStyle}>{'Email Statement'}</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: wp('92%'),
    },
    titleSectionStyle: {
        backgroundColor: Colors.GoldenD,
        height: hp(5),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: .5,
        borderColor: Colors.Charcol
    },
    titleStyle: {
        color: Colors.White,
        fontFamily: 'Helvetica Neue',
    },
    itemSectionStyle: {
        backgroundColor: Colors.White,
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
    },
    itemsStyles: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    itemTextStyle: {
        color: Colors.Grey,
        fontFamily: 'Helvetica',
    },
    paginationStyle: {
        paddingVertical: hp(4),
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonTextStyle: {
        fontFamily: 'Helvetica',
        fontSize: 15,
        color: Colors.Grey,
    },
    statementStyles: {
        flexDirection: 'row',
        borderColor: Colors.Red,
        borderWidth: 1,
        width: '100%',
        height: hp(3),
        justifyContent: 'space-around',
        // flex: 1,
    },
    buttons1: {
        width: wp('45%'),
        // borderColor: Colors.Red,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: hp(3),
    },
    buttons2: {
        width: wp('46%'),
        // borderColor: Colors.Red,
        // borderWidth: 1,
        alignItems: 'center',
        height: hp(3),
        justifyContent: 'center',
        backgroundColor: Colors.Red,
    },
    button1TextStyle: {
        fontFamily: 'Helvetica',
        fontSize: 15,
        color: Colors.Black,
    },
    button2TextStyle: {
        fontFamily: 'Helvetica',
        fontSize: 15,
        color: Colors.White,
    }
})