import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AppContent from './Navigation/Routes';



export default function App() {
    return (
        <AppContent />
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


// export default App;