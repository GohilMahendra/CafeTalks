import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native';
import { Auth } from "aws-amplify";
const SignUp = () =>
{
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const SignUp  = async() =>
    {
        try
        {
            Auth.signUp('')
        }
        catch(err)
        {
            console.log(err)
        }
    }
    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={{
                height:250,
                backgroundColor:"pink",
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
            style={{
                padding:15,
                backgroundColor:"#ffffff",
                borderRadius:10,
                elevation:10,
                marginVertical:10
            }}/>
            <TextInput 
            onChangeText={(text:string)=>setEmail(text)}
            value={email}
            placeholder='email ...'
            style={{
                padding:15,
                backgroundColor:"#ffffff",
                borderRadius:10,
                elevation:10,
                marginVertical:10
            }}/>
            <TextInput 
            onChangeText={(text:string)=>setPassword(text)}
            value={password}
            placeholder='password ...'
            style={{
                padding:15,
                backgroundColor:"#ffffff",
                borderRadius:10,
                elevation:10,
                marginVertical:10
            }}/>
            <TouchableOpacity
            style={{
                padding:20,
                backgroundColor:"pink",
                elevation:5,
                borderRadius:15,
                margin:20,
                justifyContent:'center',
                alignItems:'center'
            }}
            >
                <Text
                style={{
                    fontSize:20,
                    color:"#fff"
                }}
                >Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default SignUp