import React,{useState,useContext} from 'react'
import { TouchableOpacity,View,TextInput,Text, StyleSheet, Alert} from 'react-native';
import { Auth } from "aws-amplify";
import { useNavigation } from '@react-navigation/native';
import { RootStackRoutesParams } from '../../navigation/RootNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ThemeContext } from '../../globals/ThemeContext';
import { colors } from '../../globals/theme';

export type FocusType = 
{
 [key: string]: boolean;
}

const SignUp = () =>
{
    const {theme} = useContext(ThemeContext)
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [fullName,setFullName] = useState("")
    
    const navigation = useNavigation<NativeStackNavigationProp<RootStackRoutesParams,"SignUp">>()
    const SignUp  = async() =>
    {
        try
        {
           const signUpResponse = await Auth.signUp({
                username:userName,
                password:password,
                attributes:{
                    email:email,
                    preferred_username: userName
                }
            })
           
            const sub = signUpResponse.userSub
            
            navigation.navigate("Otpverification",{
                userName:userName,
                email: email,
                fullName: fullName,
                sub: sub,
                password: password
            })
        }
        catch(err:any)
        {
            Alert.alert("oops",JSON.stringify(err.log))
        }
    }

    return(
        <View style={{flex:1,padding:20,justifyContent:'center',backgroundColor: theme.colors.ColorBackground}}>
            
            <TextInput 
            onChangeText={(text:string)=>setUserName(text)}
            value={userName}
            placeholder='UserName ...'
            placeholderTextColor={theme.colors.PlaceHolderColor}
            style={[styles.input,{
                borderColor: theme.colors.HighlightColor,
                backgroundColor: theme.colors.ColorSecondary,
                color: theme.colors.TextColor
            }]}/>

            <TextInput 
            onChangeText={(text:string)=>setFullName(text)}
            value={fullName}
            placeholder='Full Name ...'
            placeholderTextColor={theme.colors.PlaceHolderColor}
            style={[styles.input,{
                borderColor: theme.colors.HighlightColor,
                backgroundColor: theme.colors.ColorSecondary,
                color: theme.colors.TextColor
            }]}/>
           
            <TextInput 
            onChangeText={(text:string)=>setEmail(text)}
            value={email}
            placeholder='email ...'
            placeholderTextColor={ theme.colors.PlaceHolderColor }
            style={[styles.input,{
                borderColor: theme.colors.HighlightColor,
                backgroundColor: theme.colors.ColorSecondary,
                color: theme.colors.TextColor
            }]}/>
            <TextInput 
            onChangeText={(text:string)=>setPassword(text)}
            value={password}
            placeholder='password ...'
            placeholderTextColor={ "silver"}
            style={[styles.input,{
                borderColor: theme.colors.HighlightColor,
                backgroundColor: theme.colors.ColorSecondary,
                color: theme.colors.TextColor
            }]}/>
           
            <Text 
            style={{
                color: theme.colors.ColorPrimary,
                alignSelf:"flex-end",
                fontSize:15
            }}>Forgot Password ?
            </Text>
            <TouchableOpacity
            onPress={()=>SignUp()}
            style={[styles.BtnSubmit,{ backgroundColor: theme.colors.ButtonBackgroundColor}]}
            >
                <Text
                style={[styles.textSubmit,{ 
                    color: colors.white,
                    fontFamily: theme.fonts.contentFontBold
                }]}
                >Sign Up</Text>
            </TouchableOpacity>
            <Text 
            onPress={()=>navigation.navigate("SignIn")}
            style={{
                color: theme.colors.ColorPrimary,
                alignSelf:"center",
                fontSize:15
            }}>Already have A account ? Sign In</Text>
           
        </View>
    )
}
export default SignUp

const styles = StyleSheet.create({
    input:
    {
        padding:15,
        backgroundColor:"#192734",
        borderRadius:10,
        color:"#fff",
        fontSize:15,
        elevation:-10,
        borderWidth:1,
        marginVertical:10
    },
    BtnSubmit:
    {
        padding:20,
        elevation:5,
        borderRadius:15,
        margin:20,
        justifyContent:'center',
        alignItems:'center',
        width:"100%",
        alignSelf:"center"
    },
    textSubmit:
    {
        fontSize:20,
    }
})