import React from 'react'
import {View,Text  } from "react-native";
import { NavigationContainer,  } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import SignUp from '../screens/SignUp';

export type RootStackRoutes = {
    SignUp:undefined
}
const RootNavigation = () =>
{
    const rootStack =createNativeStackNavigator<RootStackRoutes>()
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
            </rootStack.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigation