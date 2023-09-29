import React, { useContext, useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { View,Text } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import { TextInput } from 'react-native'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import Header from '../../components/global/Header'
import { RootStackRoutesParams } from '../../types/NavigationTypes'

const ForgotPassword = () =>
{
    const [userName , setUserName] = useState<string>("")
    const { theme } = useContext(ThemeContext)
    const navigation = useNavigation<NativeStackNavigationProp<RootStackRoutesParams,"ForgotPassword">>()

    const SendOtp = async() =>
    {
        try
        {
        //    const sentResponse = await Auth.forgotPassword(userName)
        //    console.log(sentResponse)
           navigation.navigate("ResetPassword",{
            userName: userName
           })
        }
        catch(err)
        {
            console.log(JSON.stringify(err))
        }
    }
    return(
        <ScrollView 
        contentContainerStyle={
            {
                justifyContent:"center",
                flex:1
            }
        }
        style={{
            flex:1,
            backgroundColor: theme.colors.ColorBackground
        }}>
            <View style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
                padding:20,
                backgroundColor: theme.colors.ColorBackground
            }}>
                
                <TextInput
                    value={userName}
                    onChangeText={(text:string) => setUserName(text)}
                    placeholder='userName ...'
                    placeholderTextColor={theme.colors.PlaceHolderColor}
                    style={[style.inputText,{
                        color:theme.colors.ColorPrimary,
                        borderColor: theme.colors.HighlightColor,
                        backgroundColor: theme.colors.ColorSecondary
                    }]}
                    />
                    <TouchableOpacity 
                    onPress={()=>SendOtp()}
                    style={{
                        justifyContent:"center",
                        alignItems:'center',
                        width:"100%",
                        padding:15,
                        borderRadius:10,
                        elevation:10,
                        marginVertical:20,
                        backgroundColor:theme.colors.ButtonBackgroundColor
                    }}>
                        <Text style={{
                            fontSize:18,
                            color:"#fff",
                            fontWeight:'bold'
                        }}>Send OTP</Text>
                    </TouchableOpacity>
                
            </View>
        </ScrollView>
    )

}
export default ForgotPassword
const style = StyleSheet.create({
    inputText:
    {
        borderWidth:1,
        elevation:10,
        marginVertical:10,
        padding:15,
        borderRadius:15,
        fontSize:15,
        width:"100%",
    }
 })