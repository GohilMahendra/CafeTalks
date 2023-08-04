import React, { useContext } from 'react'
import { View , Dimensions, Text} from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const { width, height} = Dimensions.get("window")

const Header = () =>
{
    const { theme } = useContext(ThemeContext)
    return(
    <View style={{
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        flexDirection:'row',
        width:width,
        backgroundColor: theme.colors.ColorPrimary
    }}>
        <FontAwesome5
        size={30}
        name= {"angle-left"}
        color= {"#fff"}
        />
        <Text>Forgot password</Text>

    </View>
    )

}
export default Header