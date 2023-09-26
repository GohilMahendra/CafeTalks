import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import EditProfile from '../screens/Profile/EditProfile'
import Profile from '../screens/Profile/Profile'
import { ProfileStackParams } from '../types/NavigationTypes'
const ProfileStackNavigation = () =>
{
    const ChatStack = createNativeStackNavigator<ProfileStackParams>()
    return(
        <ChatStack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName='Profile'
        >
             <ChatStack.Screen name="Profile" component={Profile} />
             <ChatStack.Screen name="EditProfile" component={EditProfile} />
        </ChatStack.Navigator>
    )

}
export default ProfileStackNavigation