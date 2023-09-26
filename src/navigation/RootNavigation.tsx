import React from 'react'
import {View,Text  } from "react-native";
import { NavigationContainer,  } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import SignUp from "../screens/Auth/SignUp";
import OtpVerification from "../screens/Auth/OtpVerification";
import SignIn from "../screens/Auth/SignIn";
import ForgotPassword from '../screens/Auth/ForgotPassword';
import ResetPassword from '../screens/Auth/ResetPassword';
import AddPost from "../screens/Post/AddPost";
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import StoryViewer from '../screens/Stories/StoryViewer';
import UserTabNavigation from './UserTabNavigation';
import SelectMedia from '../screens/Post/SelectMedia';
import { RootStackRoutesParams } from '../types/NavigationTypes';

const RootNavigation = () =>
{
    const rootStack =createNativeStackNavigator<RootStackRoutesParams>()
    return(
        <NavigationContainer >
            <rootStack.Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName = "SplashScreen">
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
                name='UserTab'
                component={UserTabNavigation}
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
                <rootStack.Screen
                name='SelectMedia'
                component={SelectMedia}
                />
            </rootStack.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigation