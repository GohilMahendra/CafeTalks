import React from 'react'
import {View,Text  } from "react-native";
import { NavigationContainer,  } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import SignUp from "../screens/Auth/SignUp";
import OtpVerification from "../screens/Auth/OtpVerification";
import SignIn from "../screens/Auth/SignIn";
import ForgotPassword from '../screens/Auth/ForgotPassword';
import ResetPassword from '../screens/Auth/ResetPassword';
import ProfileTabNavigation, { ProfileTabParams } from './ProfileTabNavigation';
import AddPost from "../screens/Post/AddPost";
import { Auth } from 'aws-amplify';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import StoryViewer from '../screens/Stories/StoryViewer';
export type RootStackRoutesParams = {
    SignIn:undefined,
    SignUp:undefined,
    ForgotPassword: undefined,
    Otpverification:{
        userName: string,
        fullName: string,
        email: string,
        sub: string,
        password: string
    },
    ResetPassword:{
        userName: string
    }
    ProfileTab: undefined,
    AddPost: undefined,
    SplashScreen:undefined,
    StoryViewer: undefined
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
            initialRouteName = "ProfileTab">
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
                <rootStack.Screen
                name='AddPost'
                component={AddPost}
                />
                <rootStack.Screen
                name='SplashScreen'
                component={SplashScreen}
                />
                 <rootStack.Screen
                name='StoryViewer'
                component={StoryViewer}
                />
            </rootStack.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigation