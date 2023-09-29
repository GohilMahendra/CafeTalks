import React,{useContext, useRef, useState} from 'react'
import { TouchableOpacity,View,TextInput,Dimensions,Text, Alert} from 'react-native';
import { Auth } from "aws-amplify";
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ThemeContext } from '../../globals/ThemeContext';
import { StyleSheet } from 'react-native';
import { RootStackRoutesParams } from '../../types/NavigationTypes';

const ResetPassword = () =>
{
    const [newPassword,setNewPassword] = useState("")
    const [newRePassword,setNewRePassword] = useState("")
    const [otpArr,setOtpArr] = useState<string[]>(["","","","","",""])
    const [otp,setOtp] = useState<string>("")

    const [otpError,setOtpError] = useState<null | string>(null)
    const [passwordError,setPasswordError] = useState<null | string>(null)

    const otpRef = useRef<any[]>([])
    const navigation = useNavigation<NativeStackNavigationProp<RootStackRoutesParams,"Otpverification">>()
    const route = useRoute<RouteProp<RootStackRoutesParams,"Otpverification">>()
    const userName = route.params.userName || ""
    const { theme } = useContext(ThemeContext)

    const changeOTP = (value:string,index:number) =>
    {
        if(value && index < otpRef.current.length - 1 )
        {
            otpRef.current[index+1].focus()
        }
        if(index == otpRef.current.length - 1)
        {
            otpRef.current[index].blur()
        }
        const newOtpArr = otpArr
        otpArr[index] = value
        let newOtpString = ""
        otpArr.forEach(function(child:string)
        {
            newOtpString += child
        })
        setOtpArr(newOtpArr)
        setOtp(newOtpString)
    }

    const previousFocus = (key:any , index:number) =>
    {
        console.log(key)
        if(key != 'Backspace' || index == 0)
        {
            return false
        }
        otpRef.current[index-1].focus()
        const newOtpArr = otpArr
        otpArr[index] = ""
        let newOtpString = ""
        otpArr.forEach(function(child:string)
        {
            newOtpString += child
        })
        setOtpArr(newOtpArr)
        setOtp(newOtpString)

    }

    const onSubmit = async() =>
    {
        if(otp.length != 6)
        {
            setOtpError("Invalid OTP")
            setPasswordError(null)
            return false
        }
        if(newPassword !== newRePassword)
        {
            setPasswordError("* Password does not match")
            setOtpError(null)
            return false
        }
        if(newPassword.length == 0)
        {
            setPasswordError("* Invalid Password")
            return false
        }
        try
        {
            await Auth.forgotPasswordSubmit(userName,otp, newPassword)
            navigation.navigate("SignIn")
        }
        catch(err:any)
        {
            Alert.alert("Error",JSON.stringify(err))
        }
    }

    const changePassword = (text: string) =>
    {
        setPasswordError(null)
        setNewPassword(text)
    }
    const changeRePassword = (text:string) =>
    {
        setNewRePassword(text)
    }

    return(
        <View style={{flex:1,justifyContent:"center",padding:20,backgroundColor:"#192734"}}>
           <TextInput
            value={newPassword}
            onChangeText={(text:string) => changePassword(text)}
            placeholder='New Password ...'
            placeholderTextColor={theme.colors.PlaceHolderColor}
            style={[style.inputText,{
                marginVertical:5,
                color:theme.colors.ColorPrimary,
                borderColor:(passwordError)?theme.colors.ErrorColor:theme.colors.HighlightColor,
                backgroundColor: theme.colors.ColorSecondary
            }]}
            />
            {
                passwordError &&
                <Text style={{
                    color: theme.colors.ErrorColor,
                    fontSize:15
                }}>{passwordError}</Text>
            }
            <TextInput
            value={newRePassword}
            onChangeText={(text:string) => changeRePassword(text)}
            placeholder='Re-Enter New Password ...'
            placeholderTextColor={theme.colors.PlaceHolderColor}
            style={[style.inputText,{
                color:theme.colors.ColorPrimary,
                borderColor:(passwordError)?theme.colors.ErrorColor:theme.colors.HighlightColor,
                backgroundColor: theme.colors.ColorSecondary
            }]}
            />
             <Text style={{
                color: theme.colors.ColorPrimary,
                fontSize:20,
                alignSelf:'center'
            }}>verfication code</Text>
            <View style={{
            flexDirection:"row",
            alignItems:'center',
            alignSelf:"center",
            justifyContent:"space-between",
            marginVertical:10
           }}>
            {
                otpArr.map((OtpBox:string,index:number)=>{
                    return(
                            <TextInput
                            id={index.toString()}
                            ref={(ref:any)=>{otpRef.current[index] = ref}}
                            onChangeText={(text:string) => changeOTP(text,index)}
                            onKeyPress={(event)=> previousFocus(event.nativeEvent.key,index)}
                            textContentType="oneTimeCode"
                            keyboardType="numeric"
                            value={OtpBox}
                            maxLength={1}
                            style={{
                                fontSize:20,
                                height:70,
                                width:50,
                                borderWidth:1,
                                color: theme.colors.ColorPrimary,
                                borderColor: (otpError) ? theme.colors.ErrorColor :
                                theme.colors.ColorPrimary,
                                borderRadius:10,
                                justifyContent:'center',
                                alignItems:'center',
                                alignContent:"center",
                                margin:5,
                                textAlign:'center',
                                textAlignVertical:'center'
                            }}

                            />
                    )
                })

            }
           </View>
           {
                otpError &&
                <Text style={{
                    color: theme.colors.ErrorColor,
                    fontSize:15
                }}>{otpError}</Text>
            }
           <TouchableOpacity
           onPress={()=>onSubmit()}
           style={{
            backgroundColor:"#00E7F2",
            padding:20,
            marginVertical:20,
            borderRadius:20,
            justifyContent:"center",
            alignItems:"center"
           }}
           >
            <Text style={{
                fontSize:20,
                color:"#fff"
            }}>Submit</Text>
           </TouchableOpacity>
        </View>
    )
}
export default ResetPassword
const style = StyleSheet.create({
    inputText:
    {
        borderWidth:1,
        elevation:5,
        marginVertical:20,
        padding:15,
        borderRadius:15,
        fontSize:15,
        width:"100%",
    }
 })