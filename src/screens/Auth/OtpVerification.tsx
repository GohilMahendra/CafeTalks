import React,{useContext, useRef, useState} from 'react'
import { TouchableOpacity,View,TextInput,Dimensions,Text} from 'react-native';
import { Auth } from "aws-amplify";
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackRoutesParams } from '../../navigation/RootNavigation';
import { ThemeContext } from '../../globals/ThemeContext';
import Header from '../../components/global/Header';
const {height,width} = Dimensions.get("window")
const OtpVerification = () =>
{
    const [otpArr,setOtpArr] = useState<string[]>(["","","","","",""])
    const [otp,setOtp] = useState<string>("")
    const otpRef = useRef<any[]>([])
    const navigation = useNavigation<NativeStackNavigationProp<RootStackRoutesParams,"Otpverification">>()
    const route = useRoute<RouteProp<RootStackRoutesParams,"Otpverification">>()
    const userName = route.params.userName || ""

    const {theme} = useContext(ThemeContext)
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
        try
        {
            const signUp = await Auth.confirmSignUp(userName,otp)
            navigation.navigate("ProfileTab")
        }
        catch(err:any)
        {
            console.log(JSON.stringify(err))
        }
    }
    const backPress = () =>
    {
        navigation.goBack()
    }
    return(
        <View style={{flex:1,justifyContent:"center",padding:20,backgroundColor:theme.colors.ColorBackground}}>
           <View style={{
            position:"absolute",
            top:5
           }}>
           <Header
           screenName='OTP verification'
           onBackPress={backPress}
           />
           </View>
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
                                color:theme.colors.ColorPrimary,
                                borderColor:theme.colors.ColorPrimary,
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
            backgroundColor:theme.colors.ColorPrimary,
            padding:20,
            borderRadius:15,
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