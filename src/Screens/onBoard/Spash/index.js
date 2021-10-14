import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../Utils';

export default class Splash extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>
                    I am Splash Screen
                </Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        alignItems: "center",
        justifyContent: "center",
    }
})