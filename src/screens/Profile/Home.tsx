import React, { useContext } from 'react'
import { View , Text } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import StoryRow from "../../components/stories/StoryRow";
const Home = () =>
{

    const {theme} = useContext(ThemeContext)
    return(
        <View style={{
            flex:1,
            backgroundColor:theme.colors.ColorBackground
        }}>
           <StoryRow/>
        </View>
    )
}
export default Home