import React,{useContext, useRef, useState} from 'react'
import { TouchableOpacity,View,TextInput,Dimensions,Text, Alert, SafeAreaView, StyleSheet} from 'react-native';
import { Auth } from "aws-amplify";
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ThemeContext } from '../../globals/ThemeContext';
import Header from '../../components/global/Header';
import { API, graphqlOperation } from "aws-amplify";
import { createUser  } from "../../graphql/mutations";
import { CreateUserInput } from '../../API';
import { colors } from '../../globals/theme';
import { RootStackRoutesParams } from '../../types/NavigationTypes';
const {height,width} = Dimensions.get("window")
const OtpVerification = () =>
{
    const [otpArr,setOtpArr] = useState<string[]>(["","","","","",""])
    const [otp,setOtp] = useState<string>("")
    const otpRef = useRef<any[]>([])
    const navigation = useNavigation<NativeStackNavigationProp<RootStackRoutesParams,"Otpverification">>()
    const route = useRoute<RouteProp<RootStackRoutesParams,"Otpverification">>()
    const userName = route.params.userName || ""
    const email = route.params.email || ""
    const fullName = route.params.fullName || ""
    const sub = route.params.sub 
    const password = route.params.password

    const {theme} = useContext(ThemeContext)

    const registerUser = async() =>
    {
        const input:CreateUserInput = {
            email:email,
            id:sub,
            name: fullName,
            profile_picture:"",
            user_name:userName
        }
        try
        {
            const response = await API.graphql(graphqlOperation(createUser,{input}))
            navigation.navigate("UserTab")
        }
        catch(err)
        {
            Alert.alert("Error",JSON.stringify(err))
        }

    }
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
            const AutoSignIn = await Auth.signIn(userName, password)
            console.log(JSON.stringify(AutoSignIn))
            await registerUser()
           // navigation.navigate("SignIn")
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
        <SafeAreaView style={[styles.container,{
            backgroundColor:theme.colors.ColorBackground
        }]}>
           <View style={styles.headerContainer}>
           <Header
           screenName='OTP verification'
           onBackPress={backPress}
           />
           </View>
           <View style={styles.otpContainer}>
            {
                otpArr.map((OtpBox:string,index:number)=>{
                    return(
                            <TextInput
                            key={index.toString()}
                            ref={(ref:any)=>{otpRef.current[index] = ref}}
                            onChangeText={(text:string) => changeOTP(text,index)}
                            onKeyPress={(event)=> previousFocus(event.nativeEvent.key,index)}
                            textContentType="oneTimeCode"
                            keyboardType="numeric"
                            value={OtpBox}
                            maxLength={1}
                            style={[styles.otpInput,{
                                color:theme.colors.ColorPrimary,
                                borderColor:theme.colors.ColorPrimary,
                            }]}
                            />
                    )
                })

            }
           </View>
           <TouchableOpacity
           onPress={()=>onSubmit()}
           style={[styles.btnSubmit,{
            backgroundColor:theme.colors.ColorPrimary,
           }]}
           >
            <Text style={styles.textSubmit}>Submit</Text>
           </TouchableOpacity>
        </SafeAreaView>
    )
}
export default OtpVerification
const styles = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent:"center",
        padding:20,
    },
    headerContainer:
    {
        position:"absolute",
        top:5
    },
    otpContainer:
    {
        flexDirection:"row",
        alignItems:'center',
        alignSelf:"center",
        justifyContent:"space-between",
        marginVertical:50
    },
    otpInput:
    {
        fontSize:20,
        height:70,
        width:50,
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        alignContent:"center",
        margin:5,
        textAlign:'center',
        textAlignVertical:'center'
    },
    btnSubmit:
    {
        padding:20,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center"
    },
    textSubmit:
    {
        fontSize:20,
        color: colors.white
    }

})