import React, { useContext } from 'react'
import { Text,TouchableOpacity,View } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'

const ProfileCircle = () =>
{
    const {theme} = useContext(ThemeContext)
    return(
        <View>
             <TouchableOpacity
            style={{
                height:80,
                width:80,
                borderRadius:80,
                backgroundColor:theme.colors.PlaceHolderColor
            }}
            ></TouchableOpacity>

        </View>
    )

}
export default ProfileCircle