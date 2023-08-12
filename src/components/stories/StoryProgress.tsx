import React, { useEffect } from 'react'
import { Animated } from 'react-native'

type StoryProgressProp={
    width:number,
    time:number,
    active:boolean
}

const StoryProgress = (Props:StoryProgressProp) =>
{
    const { time, width , active} = {...Props}
    const progress = new Animated.Value(0);

    useEffect(() => {
      // Animate the progress bar over 10 seconds

      if(active)
      {
        Animated.timing(progress, {
            toValue: 1,
            duration: time, // 10 seconds in milliseconds
            useNativeDriver: false,
        }).start();
    }
    }, [active]);

    const interpolatedProgress = progress.interpolate<number>({
        inputRange: [0, 1],
        outputRange: [0, width], // This could also be adjusted if needed
      });
  
    return(
        <Animated.View 
                
                style={{
                    height:2,
                    backgroundColor:"#fff",
                    width:interpolatedProgress,
                    marginVertical:10
        }}/>
            
    )

}
export default StoryProgress