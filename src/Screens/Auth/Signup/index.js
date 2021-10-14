import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '../../../Assets';

// Utils----------------------------------------------------------------
import { Colors } from '../../../Utils';

// Libraries----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box'

// Constants----------------------------------------------------------------
import AppButton from '../../../Constants/Button';
import AppHeader from '../../../Constants/Header';
import AppTextInput from '../../../Constants/TextInput';

export default function SignUp(props) {
    const { navigation } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [isSelected, setSelection] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View source={Icons.bg} style={styles.bgImageStyle} >
                <AppHeader leftIcon={Icons.backarrow} logo onPressed={() => navigation.pop()} />
                <View style={styles.content1}>
                    <View style={styles.InputFields}>
                        <View style={styles.InputContent}>
                            <AppTextInput placeholder="Name" value={name} onChangedText={setName} />
                            <AppTextInput placeholder="Email" value={email} onChangedText={setEmail} />
                            <AppTextInput placeholder="Password" secureEntry value={password} onChangedText={setPassword} icon />
                            <AppTextInput placeholder="Confirm Password" secureEntry value={repassword} onChangedText={setRePassword} icon validation />
                        </View>
                        <View style={styles.tnc}>
                            <CheckBox
                                style={{ flex: 1, padding: 0 }}
                                onClick={() => {
                                    setSelection(!isSelected)
                                }}
                                isChecked={isSelected}
                                rightText={"Accept Term & Conditions"}
                                rightTextStyle={{ fontSize: 12 }}
                                checkBoxColor={Colors.Red}
                            />
                        </View>
                        <View>
                            <AppButton text='Sign Up As Investor' onPressed={() => navigation.navigate('Home')} />
                        </View>
                    </View>
                </View>
                <View style={styles.content2}>
                    <View style={styles.box1}>
                        <AppButton mlarge text="Sign In With Facebook" left icon={Icons.fb} />
                        <AppButton mlarge text="Sign In With Google" left icon={Icons.gg} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.White
    },
    bgImageStyle: {
        flex: 1
    },
    content1: {
        flex: 5,
        alignItems: 'center',
    },
    content2: {
        flex: 2,
        flexDirection: 'column',
    },
    textStyle: {
        fontFamily: 'Helvetica',
        fontSize: 19,
    },
    InputFields: {
        flex: 1,
        flexDirection: "column",
    },
    InputContent: {
        paddingTop: 20,
        paddingBottom: 3,
    },
    box1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tnc: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
    }
})