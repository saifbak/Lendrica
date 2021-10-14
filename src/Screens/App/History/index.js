import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons, Images } from '../../../Assets';
import AppBar from '../../../Constants/Bar';
import AppHeader from '../../../Constants/Header';

// Utils----------------------------------------------------------------
import { Colors } from '../../../Utils';

// Libraries----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import DeviceInfo from 'react-native-device-info';

// Constants----------------------------------------------------------------
import FundBar from '../../../Constants/FundBar';
import DataTable from '../../../Constants/DataTable';

export default function History() {
    let hasNotch = DeviceInfo.hasNotch();

    return (
        <>
            <StatusBar />
            <View style={{ height: hasNotch === false ? hp(1) : hp(4), backgroundColor: Colors.GoldenD }} />
            <View style={styles.container}>
                <AppHeader leftIcon={Icons.humburger} rightIcon={Icons.bell} text='History' />
                <FundBar balance={'$ 20,000'} />
                <ScrollView style={styles.subContainer}>
                    <DataTable text="Account Statement" />
                    {/* <Expandable wallet text='Add Fund to Wallet' icon1={Icons.cardsIcon} icon2={Icons.paypalIcon} icon1Text="Credit Cards" icon2Text="Paypal" />
                    <Expandable fundDetails text='Withdraw Funds' bankName="Royal Bank of Canada" accNum="010xxxxxxxxx8654" accTitle="Paul Smith" city="Torronto" country="Canada" icon1={Icons.withdrawIcon} icon2={Icons.add_editIcon} icon1Text="Withdraw Now" icon2Text="Add/Edit Bank Account" /> */}
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    subContainer: {
        marginVertical: hp(4),
    },
})