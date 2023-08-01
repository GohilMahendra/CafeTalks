import React,{useRef, useState} from 'react'
import { TouchableOpacity,View,TextInput,Dimensions,Text} from 'react-native';
import { Auth } from "aws-amplify";
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackRoutesParams } from '../navigation/RootNavigation';
const {height,width} = Dimensions.get("window")
const OtpVerification = () =>
{
    const [otpArr,setOtpArr] = useState<string[]>(["","","","","",""])
    const [otp,setOtp] = useState<string>("")
    const otpRef = useRef<any[]>([])
    const navigation = useNavigation<NativeStackScreenProps<RootStackRoutesParams,"Otpverification">>()
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
            return false
        }
        const user = await Auth.currentAuthenticatedUser()
        console.log(user)
       
        try
        {
     //  await Auth.confirmSignUp()
        console.log(Auth.Credentials.Auth)
        }
        catch(err:any)
        {
            console.log(JSON.stringify(err))
        }
    }

    return(
        <View style={{flex:1,justifyContent:"center",padding:20,backgroundColor:"#192734"}}>
           <View style={{
            flexDirection:"row",
            alignItems:'center',
            alignSelf:"center",
            justifyContent:"space-between",
            marginVertical:50
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
                                color:"#00E7F2",
                                borderColor:"#00E7F2",
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
           <TouchableOpacity
           onPress={()=>onSubmit()}
           style={{
            backgroundColor:"#00E7F2",
            padding:20,
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
export default OtpVerification