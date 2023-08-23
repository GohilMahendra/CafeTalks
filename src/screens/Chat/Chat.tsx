import React, { useContext } from 'react'
import { View , Text } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import ChatItem from '../../components/chat/ChatItem'

const Chat = () =>
{   
 
    const { theme } = useContext(ThemeContext)
    return(
        <View style={{
            flex:1,
            backgroundColor: theme.colors.ColorBackground
        }}>
            <ChatItem></ChatItem>
        </View>
    )
}
export default Chat