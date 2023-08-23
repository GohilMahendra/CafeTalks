import React, { useContext } from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import { Image } from 'react-native-elements'
import { Badge } from "react-native-paper";
import { ThemeContext } from '../../globals/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChatStackParams } from '../../navigation/ChatStackNavigation';
const ChatItem = () =>
{
    const {theme} = useContext(ThemeContext)
    const image_url = "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png/revision/latest/scale-to-width-down/1200?cb=20210223094656"
    const user_name = "Naruto uzumaki"
    const last_message = "Hey ... call me urgent .."
    const last_message_date = "today"
    const navigation = useNavigation<NativeStackNavigationProp<ChatStackParams,"Chat">>()
    return(
        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate("PrivateChat")
        }}
        style={{
           
            padding:10,
            justifyContent:'space-between',
            flexDirection:"row",
            elevation:10,
            borderRadius:15,
            backgroundColor:theme.colors.ColorBackground
        
        }}>
            <View style={{
                flexDirection:"row"
            }}>
           <Image 
           source={{uri:image_url}}
           style={{
            height:70,
            width:70,
            borderRadius:70,
            marginRight:20
           }}/>
           <View style={{
           }}>
            <Text style={{
                fontSize:16,
                marginBottom:10,
                fontWeight:"bold",
                color:theme.colors.TextColor
            }}>{user_name}</Text>
            <Text style={{
                fontSize:15,
                color:theme.colors.TextColor
            }}>{last_message}</Text>
           </View>
           </View>
           <View style={{
           
           }}>
            <Text style={{
                marginBottom:10,
                color:theme.colors.TextColor
            }}>{last_message_date}</Text>
            <View style={{
                backgroundColor:theme.colors.ColorPrimary,
                borderRadius:20,
                height:20,

                width:20,
                justifyContent:'center',
                alignItems:"center"
            }}>
                <Text style={{
                    color:"#fff"
                }}>6</Text>
            </View>
           </View>

        </TouchableOpacity>
    )

}
export default ChatItem