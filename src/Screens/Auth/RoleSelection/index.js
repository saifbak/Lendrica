import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icons } from '../../../Assets';
import { Colors } from '../../../Utils';
import AppButton from '../../../Constants/Button';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function RoleSelection(props) {
    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.box1}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')} >
                        <View style={{ backgroundColor: Colors.Wheat, width: wp('90%'), height: hp('30%') }}>
                            <Image source={Icons.investor} style={{ width: wp('90%'), height: hp('24%'), resizeMode: "contain" }} />
                        </View>
                        <View style={{ position: 'absolute', bottom: -15 }}>
                            <AppButton xlarge text="Sign Up as Investor" onPressed={() => navigation.navigate('SignUp')} />
                        </View>
                    </TouchableWithoutFeedback>

                </View>
                <View style={styles.box2}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')} >
                        <View style={{ backgroundColor: Colors.Wheat, width: wp('90%'), height: hp('30%') }}>
                            <Image source={Icons.borrower} style={{ width: wp('90%'), height: hp('24%'), resizeMode: "contain" }} />
                        </View>
                        <View style={{ position: 'absolute', bottom: -15 }}>
                            <AppButton xlarge text="Sign Up as Borrower" onPressed={() => navigation.navigate('SignUp')} />
                        </View>
                    </TouchableWithoutFeedback>

                </View>
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignContent:'center'
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'red',
        padding: wp(5),
        paddingTop: hp(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    box1: {
        flex: 1,
    },
    box2: {
        flex: 1,
    },
})