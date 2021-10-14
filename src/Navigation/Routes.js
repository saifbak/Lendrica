// isSignedIn ? (
//     <>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//       <Stack.Screen name="Settings" component={SettingsScreen} />
//     </>
//   ) : (
//     <>
//       <Stack.Screen name="SignIn" component={SignInScreen} />
//       <Stack.Screen name="SignUp" component={SignUpScreen} />
//     </>
//   )

import 'react-native-gesture-handler'
import React, { useState } from 'react';
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

// Libararies----------------------------------------------------------------
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icons } from '../Assets';
import Opportunity from '../Screens/App/Opportunity';
import History from '../Screens/App/History';


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
    <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Home" component={MyTabs} />
    </AppStack.Navigator>
);

// Auth Stack containers

const AuthStack = createStackNavigator();
const AuthStackScreens = () => (
    <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen initial={true} name="Welcome" component={Welcome} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Role" component={Role} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
        <AuthStack.Screen name="Home" component={MyTabs} />
    </AuthStack.Navigator>
);

// RootStack
const RootStack = createStackNavigator();
const RootStackScreens = () => {
    const [isSignedIn, setSignedIn] = useState(false)
    return (
        <RootStack.Navigator headerMode="none">
            {/* {isSignedIn ? ( */}
            <RootStack.Screen name="App" component={AuthStackScreens} />
            {/* ) : ( */}
            <RootStack.Screen name="Auth" component={AppStackScreens} />
            {/* )} */}
        </RootStack.Navigator>
    );
};

export default () => {
    return (
        <NavigationContainer style={{ backgroundColor: 'white' }}>
            <RootStackScreens />
        </NavigationContainer>
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
