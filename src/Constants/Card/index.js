import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../../Utils';

// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Icons } from '../../Assets';


export default function AppCard(props) {
    const { postImage, verified, status, title, ivAm, ivDu, br, roi } = props;
    return (
        <View style={styles(props).container}>
            {/* Image View */}
            <View style={styles(props).imageViewStyle}>
                <Image source={postImage} style={styles(props).postImageStyle} />
                <TouchableWithoutFeedback style={styles(props).starView}>
                    <Image source={Icons.starIcon} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                </TouchableWithoutFeedback>
            </View>
            {/* Status View */}
            <View style={styles(props).statusView}>
                <Text style={styles(props).status1TextStyle}>{verified ? 'VERIFIED' : 'NOT VERIFIED'}</Text>
                <Text style={styles(props).status2TextStyle}>{status == 0 ? 'Pending' : 'Active'}</Text>
            </View>
            {/* Title View */}
            <View>
                <Text style={styles(props).titleStyle}>{title}</Text>
            </View>
            {/* Details View */}
            <View style={styles(props).detailsStyle}>
                <View style={styles(props).detailsContent}>
                    <Text style={styles(props).detailTextStyle}>Investment Amount</Text>
                    <Text style={styles(props).detailTextStyle}>{`$ ${ivAm}`}</Text>
                </View>
                <View style={styles(props).detailsContent}>
                    <Text style={styles(props).detailTextStyle}>Investment Duration</Text>
                    <Text style={styles(props).detailTextStyle}>{`${ivDu} Months`}</Text>
                </View>
                <View style={styles(props).detailsContent}>
                    <Text style={styles(props).detailTextStyle}>ROI</Text>
                    <Text style={styles(props).detailTextStyle}>{`${roi}%`}</Text>
                </View >

            </View>
            {/* Rating View */}
            <View>
                <View style={styles(props).ratingStyle}>
                    <Text style={styles(props).ratingTextStyle}>Borrower Rating</Text>
                    <Text style={[styles(props).ratingTextStyle, { marginStart: 3, }]}>{'(5.0)'}</Text>
                </View>
            </View>
        </View >
    )
}

const styles = props => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        width: wp('92%'),
        // alignItems: 'center',
        alignSelf: 'center',
        marginTop: wp(2),
        marginBottom: wp(5),
        // justifyContent: 'center',
    },
    imageViewStyle: {
        // borderRadius: 19,
    },
    postImageStyle: {
        borderRadius: 4,
        resizeMode: 'cover',
        width: wp('92%'),
        height: hp(25),
    },
    starView: {
        position: 'absolute',
        bottom: hp(22),
        right: 5
    },
    statusView: {
        flexDirection: "row",
        width: wp('92%'),
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    status1TextStyle: {
        fontSize: 19,
        fontSize: 12,
        fontFamily: 'Helvetica',
        fontWeight: '400',
        color: Colors.Red,
        letterSpacing: 1

    },
    status2TextStyle: {
        fontSize: 19,
        fontSize: 19,
        fontFamily: 'Helvetica',
        fontWeight: '900',
        color: props.status == 0 ? Colors.GoldenL : Colors.Green,
    },
    titleStyle: {
        marginVertical: hp(.2),
        // backgroundColor: Colors.Red,
        fontSize: 27,
        fontFamily: 'Helvetica',
        color: Colors.Grey,
        fontWeight: "300",
    },
    detailsStyle: {
        marginTop: hp(1),
    },
    detailsContent: {
        flexDirection: "row",
        width: wp('92%'),
        justifyContent: 'space-between',
        paddingVertical: hp(.7),
    },
    detailTextStyle: {
        color: Colors.Grey,
        fontSize: 19,
        fontFamily: 'Helvetica',
    },
    ratingStyle: {
        flexDirection: "row",
    },
    ratingTextStyle: {
        color: Colors.Red,
        fontSize: 13,
        fontFamily: 'Helvetica',

    }
})