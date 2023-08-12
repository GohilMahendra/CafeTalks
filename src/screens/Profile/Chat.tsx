import React, { useContext } from 'react'
import { View , Text } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'

const Chat = () =>
{
 
    const { theme } = useContext(ThemeContext)
    return(
        <View style={{
            flex:1,
            backgroundColor: theme.colors.ColorBackground
        }}>
            <Text>Home</Text>
        </View>
    )
}
export default Chat