import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Auth } from 'aws-amplify'
import React, { useContext, useEffect } from 'react'
import { View,Text } from 'react-native'
import { RootStackRoutesParams } from '../../navigation/RootNavigation'
import { ThemeContext } from '../../globals/ThemeContext'
import { brand } from "../../globals/strings";
const SplashScreen = () =>
{
    const {theme} = useContext(ThemeContext)
    const colors = theme.colors
    const navigation = useNavigation<NativeStackNavigationProp<RootStackRoutesParams>>()
    const getAuthUser = async() =>
    {
      try
      {
      const user = await Auth.currentAuthenticatedUser({bypassCache: true})
      console.log(user)
      if(user)
      {
        navigation.replace("UserTab")
      }
      else
      {
        navigation.replace("SignIn")
      }
    }
    catch(err)
    {
      navigation.replace("SignIn")
    }

    }
    useEffect(()=>{
       setTimeout(() => {
        getAuthUser()
       }, 2000);
      
    },[])
    return(
        <View style={{
          backgroundColor: colors.ColorBackground,
          justifyContent:'center',
          alignItems:"center",
          flex:1
        }}>
            <Text style={{
              color: colors.ColorPrimary,
              fontSize:50,
              fontWeight:"700"
            }}>{brand}</Text>
        </View>
    )

}
export default SplashScreen