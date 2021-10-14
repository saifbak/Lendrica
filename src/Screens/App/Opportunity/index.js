import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons, Images } from '../../../Assets';
import AppBar from '../../../Constants/Bar';
import AppHeader from '../../../Constants/Header';
import { Colors } from '../../../Utils';


// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import DeviceInfo from 'react-native-device-info';

import AppCard from '../../../Constants/Card';

export default class Opportunity extends React.Component {
    render() {
        let hasNotch = DeviceInfo.hasNotch();

        return (
            <>
                <StatusBar />
                <View style={{ height: hasNotch === false ? hp(1) : hp(4), backgroundColor: Colors.GoldenD }} />
                <View style={styles.container}>
                    <AppHeader leftIcon={Icons.humburger} rightIcon={Icons.bell} logo />
                    <AppBar name='John Doe' profileImage={Images.profile} currentAmount={10000} />
                    <View style={styles.filterView}>
                        <TouchableWithoutFeedback onPress={() => console.warn('Filter on')} style={styles.filterContent}>
                            <Image source={Icons.filterIcon} style={styles.filterIconStyle} />
                            <Text style={styles.filterTextStyle}>Filters</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <ScrollView style={{ backgroundColor: Colors.White }}>
                        <AppCard postImage={Images.img1} title="Opportunity 001" roi='20' ivAm='20,000' ivDu='10' br='5%' status={0} verified={true} />
                        <AppCard postImage={Images.img2} title="Opportunity 001" roi='20' ivAm='20,000' ivDu='10' br='5%' status={1} verified={true} />
                        <AppCard postImage={Images.img1} title="Opportunity 001" roi='20' ivAm='20,000' ivDu='10' br='5%' status={1} verified={true} />
                        <AppCard postImage={Images.img2} title="Opportunity 001" roi='20' ivAm='20,000' ivDu='10' br='5%' status={1} verified={true} />
                    </ScrollView>
                </View>
                {/* Bottomtab */}
                <View>

                </View>
            </>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    filterView: {
        // backgroundColor: Colors.Wheat,
        width: "92%",
        alignSelf: "center",
        alignItems: "flex-end",
    },
    filterContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: wp(22),
    },
    filterIconStyle: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },
    filterTextStyle: {
        color: Colors.Grey,
        fontSize: 18,
    },
})