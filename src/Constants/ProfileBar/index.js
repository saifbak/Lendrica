import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';

// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icons } from '../../Assets';

// Constants----------------------------------------------------------------
import { Colors } from '../../Utils';

export default function ProfileBar(props) {
    const { name, profileImage, currentAmount, handeEdit } = props;
    return (
        <View style={styles.container}>
            <View style={styles.box2}>
                <Image source={profileImage} style={styles.imageStyle} />
                <Text style={[styles.nameStyle, { marginStart: 10 }]}>{name}</Text>
            </View>
            <View style={styles.box3}>
                <TouchableOpacity style={styles.box3} onPress={handeEdit}>
                    <Image source={Icons.cameraIcon} style={styles.iconStyle} />
                    <Text style={styles.amountStyle}>{` Edit`}</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        alignSelf: "center",
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
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
    box2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    box3: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-end",
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
    nameStyle: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 19,
    },
    amountStyle: {
        color: Colors.Black,
        fontSize: 13.5,
        fontFamily: 'Helvetica Neue',
        marginStart: 10,
    },
    iconStyle: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    }
})