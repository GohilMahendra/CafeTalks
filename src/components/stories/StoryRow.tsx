import React, { useContext } from 'react'
import { View , Text, Touchable, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import ProfileCircle from './ProfileCircle'

const StoryRow = () =>
{
    const {theme} = useContext(ThemeContext)
    return(
        <View style={{

            borderBottomColor: theme.colors.TextColor,
            borderWidth:.5,
            height:"20%",
            width:"100%",
            elevation:10,
            padding:10
        }}>
            <ProfileCircle/>
        </View>
    )

}
export default StoryRow