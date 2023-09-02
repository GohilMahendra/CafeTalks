import React, { useContext } from 'react'
import { View , Dimensions, Text, StyleSheet} from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const { width, height} = Dimensions.get("window")

type HeaderProps=
{
    screenName: string,
    onBackPress: () => void
}

const Header = (props: HeaderProps) =>
{
    const { theme } = useContext(ThemeContext)
    const {screenName,onBackPress} = props
    return(
    <View style={styles.container}>
        <FontAwesome5
        onPress={()=>onBackPress()}
        size={30}
        name= {"angle-left"}
        color= {"#fff"}
        />
        <Text
        style={[styles.textScreenName,{
            color: theme.colors.TextColor,
        }]}
        >{screenName}</Text>
        <View/>
    </View>
    )

}
export default Header
const styles = StyleSheet.create({
    container:
    {
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        flexDirection:'row',
        width:width,
    },
    textScreenName:
    {
        fontSize:18
    }

})