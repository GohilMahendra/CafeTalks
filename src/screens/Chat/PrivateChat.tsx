import React, { useCallback, useContext, useState } from 'react'
import { View ,Text,Image, SafeAreaView } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import { GiftedChat } from "react-native-gifted-chat";
import Feather from "react-native-vector-icons/Feather";
import { DummyImage } from '../../globals/data';

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
            <View
            style={{
              padding:10,
              flexDirection:"row",
              alignItems:'center'
            }}
            >
              <Feather
              name='chevron-left'
              color={theme.colors.TextColor}
              size={30}
              />

              <View
              style={{
                flexDirection:"row",
                justifyContent:"space-between",
                marginLeft:10,
                alignItems:"center"

              }}
              >
              <Image
              source={DummyImage}
              style={{
                height:40,
                width:40,
                marginRight:20,
                borderRadius:40
              }}
              />
              <Text
              style={{
                color: theme.colors.TextColor,
                fontSize:18,
                alignSelf:"center"
              }}
              >username hb</Text>
              </View>
            </View>
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