import React from 'react'
import {View,Text  } from "react-native";
import { NavigationContainer,  } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import SignUp from '../screens/SignUp';
import OtpVerification from '../screens/OtpVerification';

export type RootStackRoutesParams = {
    SignUp:undefined,
    Otpverification:undefined
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
            initialRouteName='SignUp'>
                <rootStack.Screen
                name='SignUp'
                component={SignUp}
                />
                 <rootStack.Screen
                name='Otpverification'
                component={OtpVerification}
                />
            </rootStack.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigation