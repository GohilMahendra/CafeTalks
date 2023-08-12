import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useContext } from 'react'
import Home from '../screens/Profile/Home'
import { ThemeContext } from '../globals/ThemeContext'
import Foundation from  "react-native-vector-icons/Foundation";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Search from '../screens/Profile/Search';
import Chat from '../screens/Profile/Chat';
import Profile from '../screens/Profile/Profile';

export type ProfileTabParams = 
{
    Home: undefined,
    Search: undefined,
    Chat: undefined,
    Profile: undefined
}
const ProfileTabNavigation = () =>
{
    const ProfileTab = createBottomTabNavigator<ProfileTabParams>()
    const { theme } = useContext(ThemeContext) 
    return(
        <ProfileTab.Navigator
        initialRouteName='Home'
        screenOptions={({route})=>({
            tabBarStyle:{
                height:70,
                elevation:10,
                backgroundColor: theme.colors.ColorBackground
                
            },
            tabBarLabel:"",
            headerShown: false,
        })}
        >
            <ProfileTab.Screen
            name='Home' 
            options={{
                tabBarIcon:({focused,color,size})=>
                (
                    <Foundation
                    name='home'
                    size={30} 
                    style={{
                        padding:10,
                        borderRadius:30
                    }}
                    color={(focused)?theme.colors.ColorPrimary:theme.colors.TextColor}
                    />
                )
            }}
            component={Home}
            />
             <ProfileTab.Screen
            name='Search' 
            options={{
                tabBarIcon:({focused,color,size})=>
                (
                    <AntDesign
                    name='find'
                    size={30}
                    style={{
                        padding:10,
                        borderRadius:30
                    }}
                    color={(focused)?theme.colors.ColorPrimary:theme.colors.TextColor}
                    />
                )
            }}
            component={Search}
            />
             <ProfileTab.Screen
            name='Chat' 
            options={{
                tabBarIcon:({focused,color,size})=>
                (
                    <Ionicons
                    name='chatbox'
                    size={30}
                    style={{
                      
                        padding:10,
                        borderRadius:30
                    }}
                    color={(focused)?theme.colors.ColorPrimary:theme.colors.TextColor}
                    />
                )
            }}
            component={Chat}
            />
             <ProfileTab.Screen
            name='Profile' 
            options={{
                tabBarIcon:({focused,color,size})=>
                (
                    <Feather
                    name='user'
                    size={30}
                    style={{
                        padding:10,
                        borderRadius:30
                    }}
                    color={(focused)?theme.colors.ColorPrimary:theme.colors.TextColor}
                    />
                )
            }}
            component={Profile}
            />
        </ProfileTab.Navigator>
    )

}

export default ProfileTabNavigation