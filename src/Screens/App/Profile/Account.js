import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Icons } from '../../../Assets';
import AppButton from '../../../Constants/Button';
import EditableTextInput from '../../../Constants/EditableTextInput';
import { Colors } from '../../../Utils';

export default function Account(props) {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reenterPass, setRenEnterPass] = useState('');
    return (
        <View style={styles.container}>
            <ScrollView style={styles.subContainer} >
                <EditableTextInput placeholder="Name" icon={Icons.userIcon} value={name} onChangedText={setName} leftIcon />
                <EditableTextInput placeholder="DOB" icon={Icons.dobIcon} value={dob} onChangedText={setDob} leftIcon />
                <EditableTextInput placeholder="Email" icon={Icons.emailIcon} value={email} onChangedText={setEmail} leftIcon />
                <EditableTextInput placeholder="Phone" icon={Icons.phoneIcon} value={phone} onChangedText={setPhone} leftIcon />
                <EditableTextInput placeholder="Address" icon={Icons.addressIcon} value={address} onChangedText={setAddress} leftIcon />
                <View style={styles.titleStyle}>
                    <Text style={styles.labelStyle}>
                        CHANGE PASSWORD
                    </Text>
                </View>
                <EditableTextInput secureText placeholder="New Password" icon={Icons.show} hideIcon={Icons.hidden} value={newPassword} onChangedText={setNewPassword} rightIcon />
                <EditableTextInput secureText placeholder="Re-enter Password" icon={Icons.show} hideIcon={Icons.hidden} value={reenterPass} onChangedText={setRenEnterPass} rightIcon />
                <View style={{ alignItems: 'center' }}><AppButton text="Save" medium /></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    // subContainer: {
    //     flex: 1,
    // },
    titleStyle: {
        // backgroundColor: Colors.Red,
        margin: 15,
        paddingHorizontal: 10,
    },
    labelStyle: {
        fontFamily: 'Helvetica',
        fontSize: 17,
        fontWeight: 'bold',
        letterSpacing: -1

    }
})