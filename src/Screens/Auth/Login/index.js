import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TouchableWithoutFeedback } from 'react-native';
import { Icons } from '../../../Assets';

// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Constants----------------------------------------------------------------
import AppButton from '../../../Constants/Button';
import AppHeader from '../../../Constants/Header';
import AppTextInput from '../../../Constants/TextInput';
import { Colors } from '../../../Utils';
export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleLogin = () => {
        navigation.navigate('Home')
        // if (email == '' || email == null) {
        //     setValidationMessage('Enter a valid email')
        // }
        // if (password == '' || password == null) {
        //     // setValidationMessage('Enter password')
        // }
        // console.warn(`${email}\n\n${password}\n\n`)
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={styles.content}  >
                <View style={styles.box1}>
                    <View style={styles.section1}>
                        <Image source={Icons.hlogo} style={{ width: wp(12), height: hp(9), resizeMode: 'contain' }} />
                        <Image source={Icons.loginbrand} style={{ width: wp(45), height: hp(8.5), resizeMode: 'center' }} />
                    </View>
                    <View style={styles.section2}>
                        <AppTextInput placeholder="Email" value={email} validation onChangedText={setEmail} validationText={validationMessage} />
                        <AppTextInput placeholder="Password" value={password} validation icon onChangedText={setPassword} secureEntry validationText={validationMessage} />
                        <View style={styles.link}>
                            <TouchableWithoutFeedback>
                                <Text>Forgost Password?</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={styles.section3}>
                        <AppButton mlarge text="Sign In" onPressed={handleLogin} />
                    </View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.section4}>
                        <AppButton mlarge text="Sign In With Facebook" left icon={Icons.fb} />
                        <AppButton mlarge text="Sign In With Google" left icon={Icons.gg} />
                    </View>
                    <View style={styles.section5}>
                        <Text style={styles.textStyle}>Don't have an account?
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.linkStyle}> Sign Up</Text>
                            </TouchableWithoutFeedback>

                        </Text>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,

    },
    content: {
        flex: 1,
    },
    box1: {
        flex: 1,
        padding: wp(10),
    },
    box2: {
        flex: .6,
    },
    section1: {
        justifyContent: "center",
        flexDirection: 'row',
    },
    section2: {
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'column',
        padding: 10,
    },
    section3: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    section4: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'column',
    },
    section5: {
        flex: .5,
        justifyContent: "flex-start",
        alignItems: 'center',
        flexDirection: 'column',
    },
    link: {
        paddingVertical: wp(2),
        alignSelf: 'flex-end'
    },
    linkStyle: {
        color: Colors.Red,
        fontSize: 17
    },
    textStyle: {
        color: Colors.Charcol,
        fontSize: 16
    }
})