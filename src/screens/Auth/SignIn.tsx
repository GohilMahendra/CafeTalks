import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useContext, useState } from 'react'
import { Alert, TextInput, TouchableOpacity, View } from 'react-native'
import { RootStackRoutesParams } from '../../navigation/RootNavigation'
import { ThemeContext } from '../../globals/ThemeContext'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { Auth } from 'aws-amplify'
import { colors } from '../../globals/theme'

 const SignIn = () =>
 {
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const {theme} = useContext(ThemeContext)
    const navigation = useNavigation<NativeStackNavigationProp<RootStackRoutesParams,"SignIn">>()

    // no needs do manual cred check AWS will cover
    const SignIn = async() =>
    {
       try
       {
            const result = await Auth.signIn(userName,password)
            navigation.replace("ProfileTab")

       }
       catch(err)
       {
            Alert.alert(JSON.stringify(err))
       }
    }

    return(
        <View style={[styles.container,{
            backgroundColor: theme.colors.ColorBackground
        }]}>
            <TextInput
            value={userName}
            onChangeText={(text:string) => setUserName(text)}
            placeholder='userName ...'
            placeholderTextColor={theme.colors.PlaceHolderColor}
            style={[styles.inputText,{
                color:theme.colors.TextColor,
                borderColor:theme.colors.HighlightColor,
                backgroundColor: theme.colors.ColorSecondary
            }]}
            />
            <TextInput
            value={password}
            onChangeText={(text:string) => setPassword(text)}
            placeholder='password ...'
            placeholderTextColor={theme.colors.PlaceHolderColor}
            style={[styles.inputText,{
                color:theme.colors.TextColor,
                borderColor:theme.colors.HighlightColor,
                backgroundColor: theme.colors.ColorSecondary
            }]}
            />
            <Text 
            onPress={()=> navigation.navigate("ForgotPassword")}
            style={[styles.textForgotPass,{color: theme.colors.ColorPrimary}]}>
                Forgot password ?
            </Text>
            <TouchableOpacity 
            onPress={()=>SignIn()}
            style={[styles.btnSignIn,{
                backgroundColor:theme.colors.ButtonBackgroundColor
            }]}>
                <Text style={styles.textSignIn}>Sign In</Text>
            </TouchableOpacity>

            <Text 
            onPress={()=>navigation.navigate("SignUp")}
            style={{
                fontSize:15,
                color: theme.colors.ColorPrimary,
            }}>Don't have any account ? Sign Up</Text>  
        </View>
    )
 }
 export default SignIn
 const styles = StyleSheet.create({
    inputText:
    {
        borderWidth:1,
        elevation:-5,
        marginVertical:10,
        padding:15,
        borderRadius:15,
        fontSize:15,
        width:"100%",
    },
    container:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    textForgotPass:
    {
        fontSize:15,
        alignSelf:"flex-end",
    },
    btnSignIn:
    {
        justifyContent:"center",
        alignItems:'center',
        width:"100%",
        padding:15,
        borderRadius:10,
        elevation:10,
        marginVertical:20,
    },
    textSignIn:
    {
        fontSize:18,
        color: colors.white,
        fontWeight:'bold'
    }
 })