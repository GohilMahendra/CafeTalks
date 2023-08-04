import React from 'react'
import {View,Text  } from "react-native";
import { NavigationContainer,  } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import SignUp from '../screens/SignUp';
import OtpVerification from '../screens/OtpVerification';
import SignIn from '../screens/SignIn';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import ProfileTabNavigation from './ProfileTabNavigation';

export type RootStackRoutesParams = {
    SignIn:undefined,
    SignUp:undefined,
    ForgotPassword: undefined,
    Otpverification:{
        userName: string
    },
    ResetPassword:{
        userName: string
    }
    ProfileTab: undefined
}
const RootNavigation = () =>
{
    const rootStack =createNativeStackNavigator<RootStackRoutesParams>()
    return(
        <NavigationContainer >
            <rootStack.Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='ProfileTab'>
                <rootStack.Screen
                name='SignIn'
                component={SignIn}
                />
                <rootStack.Screen
                name='SignUp'
                component={SignUp}
                />
                <rootStack.Screen
                name='ForgotPassword'
                component={ForgotPassword}
                />
                 <rootStack.Screen
                name='Otpverification'
                component={OtpVerification}
                />
                <rootStack.Screen
                name='ResetPassword'
                component={ResetPassword}
                />
                <rootStack.Screen
                name='ProfileTab'
                component={ProfileTabNavigation}
                />
            </rootStack.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigation