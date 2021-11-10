import 'react-native-gesture-handler'
import React, { useEffect, useMemo, useState } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Applications from '../Screens/App/Applications';
import ManageFunds from '../Screens/App/ManageFunds';
import Profile from '../Screens/App/Profile';
import Login from '../Screens/Auth/Login';
import SignUp from '../Screens/Auth/Signup';
import Welcome from '../Screens/Auth/Welcome';
import Role from '../Screens/Auth/RoleSelection';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../Utils';
import { useDispatch } from 'react-redux';

// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icons } from '../Assets';
import Opportunity from '../Screens/App/Opportunity';
import History from '../Screens/App/History';
import Splash from '../Screens/onBoard/Splash';
import { AuthContext } from '../Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { adduserdata, clearuserdetails } from '../Redux/UserReducer'
import { clearsignupdata } from '../Redux/SignupReducer';
import { Service } from '../Services/Services';
const Tab = createBottomTabNavigator();


function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: 'center' }}
                    >
                        <View style={styles.tabContent}>
                            <Image
                                source={
                                    label == 'Applications' || label == 'Opportunity'
                                        ? Icons.appIcon
                                        : label == 'Manage Funds'
                                            ? Icons.fundIcon
                                            : label == 'History'
                                                ? Icons.historyIcon
                                                : label == 'Profile'
                                                    ? Icons.profileIcon
                                                    : null
                                }
                                style={[styles.iconStyle, { tintColor: isFocused ? Colors.Red : Colors.White }]}
                            />
                            <Text style={{ color: isFocused ? Colors.Red : Colors.White, fontWeight: "700", fontFamily: "Helvetica", fontSize: 12 }}>
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}
            tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen name="Applications" component={Applications} />
            {/* <Tab.Screen name="Opportunity" component={Opportunity} /> */}
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Manage Funds" component={ManageFunds} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
// App Stack containers

const AppStack = createStackNavigator();
const AppStackScreens = () => (
    <AppStack.Navigator screenOptions={{
        headerShown: false
    }}>
        <AppStack.Screen name="Home" component={MyTabs} />
    </AppStack.Navigator>
);

// Auth Stack containers

const AuthStack = createStackNavigator();
const AuthStackScreens = () => (
    <AuthStack.Navigator screenOptions={{
        headerShown: false
    }}>
        {/* <AuthStack.Screen initial={true} name="Splash" component={Splash} /> */}
        <AuthStack.Screen initial={true} name="Welcome" component={Welcome} />
        <AuthStack.Screen name="Role" component={Role} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
        {/* <AuthStack.Screen name="Home" component={MyTabs} /> */}
    </AuthStack.Navigator>
);

// RootStack
const RootStack = createStackNavigator();
const RootStackScreens = ({ onboarding, userToken, inviteFriendsToken }) => {
    const { state } = React.useContext(AuthContext);
    const [isSignedIn, setSignedIn] = useState(false)
    let isAuth = false;
    useEffect(() => {
        AsyncStorage.getItem('@userToken').then((value) => {
            // console.warn('val:', value);
            if (value) {
                isAuth = true;
            }
        });
    }, []);

    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {userToken || isAuth
                ? <RootStack.Screen name="App" component={AppStackScreens} />
                : <RootStack.Screen name="Auth" component={AuthStackScreens} />
            }
        </RootStack.Navigator>
    );
};

export default () => {
    const [isLoading, setIsLoading] = useState(true);
    const [onboarding, setOnboarding] = useState('');
    const [inviteFriendsToken, setInviteFriendsToken] = useState('');
    const [userToken, setUserToken] = useState('');
    const dispatch = useDispatch();
    const clearSignUpData = () => dispatch(clearsignupdata());
    const clearUserDetails = () => dispatch(clearuserdetails());
    const addUser = (data) => dispatch(adduserdata(data));

    console.warn('userToken ==>', userToken)

    const authContext = useMemo(() => {
        return {
            loading: () => {
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            },
            signIn: (
                obj,
                // rememberMe,
                adduserData,
                loading,
                // error,
                // setModalVisible,
            ) => {
                Service.login(
                    obj,
                    // rememberMe,
                    adduserData,
                    loading,
                    setUserToken,
                    // error,
                    // setModalVisible,
                );
            },
            signUp: async (data, navigation, loading) => {
                Service.signup(
                    data,
                    navigation,
                    loading,
                    setUserToken,
                    addUser,
                );
            },
            // removeInviteFriendsToken: () => {
            //     setInviteFriendsToken('');
            //     AsyncStorage.setItem('@inviteFriendsToken', '');
            // },
            signOut: () => {
                setIsLoading(false);
                clearSignUpData();
                clearUserDetails();
                setUserToken(null);
                AsyncStorage.setItem('@userToken', '');
                AsyncStorage.removeItem('@user');
                // GoogleSignin.revokeAccess();
            },
            // onboard: () => {
            //     setIsLoading(true);
            //     setOnboarding('true');
            //     AsyncStorage.setItem('@onboarding', 'asdf');
            //     setTimeout(() => {
            //         setIsLoading(false);
            //     }, 2000);
            // },
            // googleSignIn: (userInfo) => {
            //     // console.log('authContext -> userInfo', userInfo.token.accessToken);
            //     setUserToken(userInfo.token.accessToken);
            //     AsyncStorage.setItem(
            //         '@userToken',
            //         JSON.stringify(userInfo.token.accessToken),
            //     ).then((res) => console.log('success', res));
            // },
            // goToChat: () => {
            //     goToChat(true);
            // },
            // goBackfromChat: () => {
            //     goToChat(false);
            // },
        };
    }, []);

    useEffect(() => {
        // crashlytics().log('App mounted.');
        // Geocoder.init('AIzaSyAkeEEi29Xdm5EQIefzyJmLUsjKYow7LDo');
        // AsyncStorage.clear();
        // AsyncStorage.getItem('@onboarding').then((value) => {
        //     setIsLoading(true);
        //     // console.log('value onboarding', value);
        //     setOnboarding(value);
        //     setTimeout(() => {
        //         setIsLoading(false);
        //     }, 3000);
        // });
        AsyncStorage.getItem('@userToken').then(async (value) => {
            setIsLoading(true);
            //await Service.verifyToken(value);
            setUserToken(value);
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        });
    }, []);

    if (isLoading) {
        return <Splash />;
    }
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <RootStackScreens
                    onboarding={onboarding}
                    userToken={userToken}
                    inviteFriendsToken={inviteFriendsToken}
                />
            </NavigationContainer>
        </AuthContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.GoldenD,
        height: hp(10),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal: 8,
    },
    tabContent: {
        flexDirection: 'column',
        alignItems: 'center',
        height: hp(6),
        marginTop: 10,
        justifyContent: 'space-between',
    },
    iconStyle: {
        width: 30,
        height: 30,
        resizeMode: "contain"
    },


})
