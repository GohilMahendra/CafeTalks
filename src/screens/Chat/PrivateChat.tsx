import React, { useCallback, useContext, useState } from 'react'
import { View ,Text, SafeAreaView } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import { GiftedChat } from "react-native-gifted-chat";
const PrivateChat = () =>
{
    const [messages, setMessages] = useState([ {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },])
    const {theme} = useContext(ThemeContext)

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages),
        )
      }, [])
    return(
        <SafeAreaView
        style={{
            flex:1,
            backgroundColor:theme.colors.ColorBackground
        }}
        >
            <GiftedChat
            messages={messages}
            onSend={(messages:never) => onSend(messages)}
            user={{
                _id: 1,
              }}
            />

        </SafeAreaView>
    )
}
export default PrivateChat