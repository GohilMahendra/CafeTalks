import React, { useEffect, useState } from 'react'
import { View , Dimensions, Animated } from 'react-native'
import { ProgressBar } from "react-native-paper";
import StoryProgress from '../../components/stories/StoryProgress';
const {height,width} = Dimensions.get("window")
import Progress from "react-native-progress";
import VideoPlayer from '../../components/Feed/VideoPlayer';
const StoryViewer = () =>
{
    
   

  
  
    return(
        <View style={{
            backgroundColor:"black",
            flex:1
        }}>
            <VideoPlayer/>
        </View>
    )

}
export default StoryViewer