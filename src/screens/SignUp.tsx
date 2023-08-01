import React,{useState,useContext} from 'react'
import { TouchableOpacity,View,TextInput,Text} from 'react-native';
import { Auth } from "aws-amplify";
import { useNavigation } from '@react-navigation/native';
import { RootStackRoutesParams } from '../navigation/RootNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ThemeContext } from '../globals/ThemeContext';

const SignUp = () =>
{
    const {theme} = useContext(ThemeContext)
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigation = useNavigation<NativeStackNavigationProp<RootStackRoutesParams,"SignUp">>()
    const SignUp  = async() =>
    {
        try
        {
           const signUp = await Auth.signUp({
                username:email,
                password:password,
            })

            navigation.navigate("Otpverification")
        }
        catch(err)
        {
            console.log(err)
        }
    }
    return(
        <View style={{flex:1,backgroundColor:"#192734"}}>
            <View style={{
                height:250,
                backgroundColor:"#00E7F2",
                borderBottomLeftRadius:20,
                borderBottomRightRadius:20
            }}/>
            <View style={{
                padding:20
            }}>
            <TextInput 
            onChangeText={(text:string)=>setUserName(text)}
            value={userName}
            placeholder='UserName ...'
            placeholderTextColor={ "silver"}
            style={{
                padding:15,
                backgroundColor: theme.colors.ColorSecondary,
                borderRadius:10,
                color:"#fff",
                fontSize:15,
                borderColor: theme.colors.ColorPrimary,
                borderWidth:0.6,
                elevation:10,
                marginVertical:10
            }}/>
            <TextInput 
            onChangeText={(text:string)=>setEmail(text)}
            value={email}
            placeholder='email ...'
            placeholderTextColor={ "silver"}
            style={{
                padding:15,
                backgroundColor:"#192734",
                borderRadius:10,
                color:"#fff",
                fontSize:15,
                elevation:10,
                borderColor: theme.colors.ColorPrimary,
                borderWidth:0.6,
                marginVertical:10
            }}/>
            <TextInput 
            onChangeText={(text:string)=>setPassword(text)}
            value={password}
            placeholder='password ...'
            placeholderTextColor={ "silver"}
            style={{
                padding:15,
                backgroundColor:"#192734",
                borderRadius:10,
                elevation:5,
                fontSize:15,
                color:"#fff",
                borderColor: theme.colors.ColorSecondary,
                borderWidth:0.6,
                marginVertical:10
            }}/>
            <TouchableOpacity
            onPress={()=>SignUp()}
            style={{
                padding:20,
                backgroundColor: theme.colors.ButtonBackgroundColor,
                elevation:5,
                borderRadius:15,
                margin:20,
                justifyContent:'center',
                alignItems:'center',
                width:"100%",
                alignSelf:"center"
            }}
            >
                <Text
                style={{
                    fontSize:20,
                    color: theme.colors.TextColor
                }}
                >Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default SignUp