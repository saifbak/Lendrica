/* eslint-disable handle-callback-err */
/* eslint-disable prettier/prettier */
import React from 'react';
import { APIS, Headers } from './api';
import { Alert } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Service = {
  login: async (
    state,
    // rememberMe,
    adduserData,
    loading,
    setUserToken,
    // message,
    // modalVisible,
  ) => {
    console.warn('state, state', state)
    loading(true);
    // modalVisible(true)
    await Axios.post(APIS.Login, state, {
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        console.log('Service => Login => res =>', res.data.data.token);
        setUserToken(res.data.data.token);
        adduserData(res.data.data);
        global.token = res.data.data.token;
        // // if (rememberMe) {
        // //   AsyncStorage.setItem('@userToken', res.data.data.access_token);
        // //   AsyncStorage.setItem('@user', JSON.stringify(res.data.data));
        // // }
        // message(res.data.message);
        loading(false);
        // modalVisible(false);
        //triggerContactCall()
      })
      .catch((err) => {

        console.log('Service => Login => error =>', err);
        // message(err.response.data.message);
        loading(false); s
      });
  },
  signup: async (
    state,
    navigation,
    loading,
    setUserToken,
    addUser,
  ) => {
    loading(true);
    console.log('Sign Up As Investor', state)
    await Axios.post(APIS.Register, state, {
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(async (res) => {
        try {
          console.log('signup -> res', res);
          loading(false);
          // responseMessage(res.data.message);
          let _state = {
            email: res.data.data.email,
            password: state.password,
          };
          // console.log('SignUp -> SignIn ->', _state)
          await Axios.post(APIS.Login, _state, {
            headers: {
              // Accept: 'application/json',
              'Content-Type': 'application/json',
            }
          })
            .then((response) => {
              console.warn('login response', response.data.data);
              AsyncStorage.setItem(
                '@userToken',
                response.data.data.token,
              );
              AsyncStorage.setItem('@user', JSON.stringify(response.data.data));
              setUserToken(response.data.data.token);
              addUser(response.data.data);
              global.token = response.data.data.token;
              //setInviteFriendsToken(response.data.data.access_token);
              //AsyncStorage.setItem('@inviteFriendsToken', response.data.data.access_token);
              // navigation.navigate('InviteFriends');
              navigation.navigate('Home');
            })
            .catch((error) => {
              console.log(
                'login error',
                error,
              );
            });
        } catch (error) {
          console.log('error', error);
        }
      })
      .catch((err) => {
        console.log('err', err);
        loading(false);
        // responseMessage(
        //   err.message
        //     ? err.message
        //     : err.response.data.message
        //       ? err.response.data.message
        //       : 'Something went wrong',
        // );
      });
  },
};
