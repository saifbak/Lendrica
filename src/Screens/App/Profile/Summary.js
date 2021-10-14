import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icons } from '../../../Assets';
import SummaryCard from '../../../Constants/SummaryCard';
import { Colors } from '../../../Utils';

export default function Summary(props) {
    console.warn(props)
    return (
        <View style={styles.container}>
            <SummaryCard title="Wallet Balance" images={Icons.walletIcon} value="$ 10,000" />
            <SummaryCard title="Total Investment" images={Icons.investIcon} value="$ 200,000" />
            <SummaryCard title="Number of Projects" images={Icons.projectIcon} value="2" />
            <SummaryCard title="Net Profit (Annual)" images={Icons.profitIcon} value="$ 10,000" />
            <SummaryCard title="ROI" images={Icons.roiIcon} value="20%" />
            <SummaryCard title="Investment Since" images={Icons.durationIcon} value="$ 10,000" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.White,

    }
})