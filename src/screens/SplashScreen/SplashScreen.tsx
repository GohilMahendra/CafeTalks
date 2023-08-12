import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Auth } from 'aws-amplify'
import React, { useEffect } from 'react'
import { View,Text } from 'react-native'
import { RootStackRoutesParams } from '../../navigation/RootNavigation'

const SplashScreen = () =>
{
    const navigation = useNavigation<NativeStackNavigationProp<RootStackRoutesParams>>()
    const getAuthUser = async() =>
    {
      const user = await Auth.currentAuthenticatedUser({bypassCache: true})
      if(user)
      {
        navigation.replace("ProfileTab")
      }
      else
      {
        navigation.replace("SignIn")
      }

    }
    useEffect(()=>{
        getAuthUser()
    },[])
    return(
        <View>
            <Text>SPlash</Text>
        </View>
    )

}
export default SplashScreen