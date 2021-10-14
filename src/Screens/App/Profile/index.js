import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons, Images } from '../../../Assets';
// import AppBar from '../../../Constants/Bar';
import AppHeader from '../../../Constants/Header';
import { Colors } from '../../../Utils';


// Libararies----------------------------------------------------------------
// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
// import AppCard from '../../../Constants/Card';
import ProfileBar from '../../../Constants/ProfileBar';
import Summary from './Summary';
import Account from './Account';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DeviceInfo from 'react-native-device-info';

const Tab = createMaterialTopTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 14, bottom: 8 },
            // tabBarItemStyle: { width: 100 },
            tabBarStyle: { backgroundColor: Colors.Red, borderColor: Colors.Red, height: 30, },
            tabBarIndicatorStyle: { backgroundColor: Colors.Red },
            // tabBarIndicatorContainerStyle: { backgroundColor: Colors.Red },
            tabBarActiveTintColor: Colors.White,
            tabBarInactiveTintColor: Colors.White
        }}>
            <Tab.Screen name="Summary" component={Summary} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    );
}
export default class Profile extends React.Component {
    render() {
        let hasNotch = DeviceInfo.hasNotch();
        return (
            <>
                <StatusBar />
                <View style={{ height: hasNotch === false ? hp(1) : hp(4), backgroundColor: Colors.GoldenD }} />
                <View style={styles.container}>
                    <AppHeader leftIcon={Icons.humburger} rightIcon={Icons.bell} logo />
                    <ProfileBar name='John Doe' profileImage={Images.profile} currentAmount={10000} />
                    <View style={{ flex: 1, width: wp('92%'), alignSelf: 'center', marginVertical: 20, }}>
                        <MyTabs />
                    </View>
                    {/* <View style={styles.filterView}>
                        <TouchableWithoutFeedback onPress={() => console.warn('Filter on')} style={styles.filterContent}>
                            <Image source={Icons.filterIcon} style={styles.filterIconStyle} />
                            <Text style={styles.filterTextStyle}>Filters</Text>
                        </TouchableWithoutFeedback>
                    </View> */}
                    {/* <ScrollView style={{ backgroundColor: Colors.White }}>
                        <AppCard postImage={Images.img1} title="Opportunity 001" roi='20' ivAm='20,000' ivDu='10' br='5%' status={0} verified={true} />
                        <AppCard postImage={Images.img2} title="Opportunity 001" roi='20' ivAm='20,000' ivDu='10' br='5%' status={1} verified={true} />
                        <AppCard postImage={Images.img1} title="Opportunity 001" roi='20' ivAm='20,000' ivDu='10' br='5%' status={1} verified={true} />
                        <AppCard postImage={Images.img2} title="Opportunity 001" roi='20' ivAm='20,000' ivDu='10' br='5%' status={1} verified={true} />
                    </ScrollView> */}
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