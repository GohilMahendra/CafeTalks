import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View , Text } from 'react-native'
import Chat from '../screens/Chat/Chat'
import PrivateChat from '../screens/Chat/PrivateChat'

export type ChatStackParams = {
    Chat: undefined,
    PrivateChat: undefined
}

const ChatStackNavigation = () =>
{
    const ChatStack = createNativeStackNavigator<ChatStackParams>()
    return(
        <ChatStack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName='Chat'
        >
             <ChatStack.Screen name="Chat" component={Chat} />
             <ChatStack.Screen name="PrivateChat" component={PrivateChat} />
        </ChatStack.Navigator>
    )

}
export default ChatStackNavigation