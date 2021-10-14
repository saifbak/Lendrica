import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

// Utils----------------------------------------------------------------
import { Colors } from '../../Utils';

// Libraries----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// Constants----------------------------------------------------------------
import AppButton from '../Button';
import { Icons } from '../../Assets';

export default function Expandable(props) {
    const { text, fundDetails, bankName, accNum, accTitle, city, country, icon1, icon2, icon1Text, icon2Text } = props;
    const [collapsed, setCollapsed] = useState(false);
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback style={styles.titleSectionStyle} onPress={() => setCollapsed(!collapsed)}>
                <Text style={styles.titleStyle}>{text}</Text>
            </TouchableWithoutFeedback>
            {!collapsed && <View style={styles.collapseSection}>
                {fundDetails && < View style={styles.box1}>
                    <Text style={styles.heading}>Saved Bank Details (for Wiretransfer):</Text>
                    <View style={styles.details}>
                        <Text style={styles.textStyle}>Bank:</Text>
                        <Text style={[styles.textStyle, { marginStart: wp(1) }]}>{bankName}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.textStyle}>Account No:</Text>
                        <Text style={[styles.textStyle, { marginStart: wp(1) }]}>{accNum}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.textStyle}>Account Title</Text>
                        <Text style={[styles.textStyle, { marginStart: wp(1) }]}>{accTitle}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.textStyle}>City:</Text>
                        <Text style={[styles.textStyle, { marginStart: wp(3) }]}>{city}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.textStyle}>Country:</Text>
                        <Text style={[styles.textStyle, { marginStart: wp(5) }]}>{country}</Text>
                    </View>
                </View>}
                <View style={styles.box3}>
                    <AppButton left icon={icon1} text={icon1Text} small />
                    <AppButton left icon={icon2} text={icon2Text} small />
                </View>
            </View>}
        </View >
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
    collapseSection: {
        backgroundColor: Colors.White,
        shadowColor: Colors.Grey,
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        height: 'auto',
    },
    box1: {
        width: wp('75%'),
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    box3: {
        backgroundColor: Colors.White,
        marginVertical: hp(4),
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    heading: {
        color: Colors.Black,
        fontFamily: 'Helvetica',
        fontWeight: '700',
        fontSize: 15,
        paddingVertical: hp(2),
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    textStyle: {
        color: Colors.Grey,
        fontFamily: 'Helvetica'
    }
})