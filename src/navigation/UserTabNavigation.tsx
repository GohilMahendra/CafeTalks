import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useContext } from 'react'
import Home from '../screens/Profile/Home'
import { ThemeContext } from '../globals/ThemeContext'
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Search from '../screens/Profile/Search';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import ChatStackNavigation from './ChatStackNavigation';
import ProfileStackNavigation from './ProfileStackNavigation';

export type UserTabNavigationParams = 
{
    Home: undefined,
    Search: undefined,
    ChatStack: undefined,
    ProfileStack: undefined
}
const UserTabNavigation = () =>
{
    const ProfileTab = createBottomTabNavigator<UserTabNavigationParams>()
    const { theme } = useContext(ThemeContext) 
    return(
        <ProfileTab.Navigator
        initialRouteName='Home'
        screenOptions={({route})=>({
            tabBarHideOnKeyboard: true,
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
                    <Feather
                    name='home'
                    size={30} 
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
                    color={(focused)?theme.colors.ColorPrimary:theme.colors.TextColor}
                    />
                )
            }}
            component={Search}
            />
             <ProfileTab.Screen
            name='ChatStack' 
            options={{
                tabBarIcon:({focused,color,size})=>
                (
                    <FontAwesome5Icon
                    name='comment'
                    size={30}
                    color={(focused)?theme.colors.ColorPrimary:theme.colors.TextColor}
                    />
                )
            }}
            component={ChatStackNavigation}
            />
             <ProfileTab.Screen
            name='ProfileStack' 
            options={{
                tabBarIcon:({focused,color,size})=>
                (
                    <Feather
                    name='user'
                    size={30}
                    color={(focused)?theme.colors.ColorPrimary:theme.colors.TextColor}
                    />
                )
            }}
            component={ProfileStackNavigation}
            />
        </ProfileTab.Navigator>
    )

}

export default UserTabNavigation