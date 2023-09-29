import React, { useEffect, useRef, useState } from 'react'
import { View , Dimensions, Animated, VirtualizedList , TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import { Image } from 'react-native-elements';
const {height,width} = Dimensions.get("window")
const StoryViewer = () =>
{
    const [storyArr,setStoryArr]=useState([{
        id:0,
        url:"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974740819/jujutsu-kaisen-the-official-anime-guide-season-1-9781974740819_hr.jpg",
        type:"image",
        duration:10,
        viewed:false
        },
        {
        id:1,
        url:"https://www.animenewsnetwork.com/hotlink/images/encyc/A25346-1023635631.1690326071.jpg",
        type:"image",
        duration:10,
        viewed:false

    }])

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const progress = useRef(new Animated.Value(0)).current
   

    const widthBar = width/storyArr.length - storyArr.length*3
    
    const startStory = () =>
    {
        Animated.timing(
            progress,
            {
                toValue: widthBar,
                duration: 10 * 1000,
                useNativeDriver:false,
            }
        ).start(()=>{
            nextStory()
        })
    }

    
    const nextStory = () =>
    {
        if(currentIndex < storyArr.length -1)
            {
                const temp = storyArr
                const current = temp[currentIndex]
                current.viewed = true
                temp[currentIndex] = current
                setStoryArr(temp)
                progress.setValue(0)
                setCurrentIndex(currentIndex + 1)
            }
        else{
            goToNextStory()
        }
    }

    const previousStory = () =>
    {
        if(currentIndex != 0)
        {
            const temp = storyArr
            const current = temp[currentIndex]
            current.viewed = true
            temp[currentIndex] = current
            setStoryArr(temp)
            progress.setValue(0)
            setCurrentIndex(currentIndex - 1)
        }
    }

    const goToNextStory = () =>
    {
        const arr = [{
            id:0,
            url:"https://pyxis.nymag.com/v1/imgs/27f/3d3/98526ff3b1c330e9bf661500bbdefaa737-The-Witcher-n-S3-E4-00-28-49-08--1-.1x.rsquare.w1400.jpg",
            type:"image",
            duration:10,
            viewed:false
            },
            {
            id:1,
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1dGULO7XGLapu7tBSy7vrfxgIDMmCO5BYg&usqp=CAU",
            type:"image",
            duration:10,
            viewed:false
    
        }] 

        setCurrentIndex(0)
        progress.setValue(0)
        setStoryArr(arr)
        
    }

    
   
    return(
        <View style={{
            backgroundColor:"black",
            flex:1
        }}>
            <View style={{
                flexDirection:"row",
                justifyContent:"space-between"

            }}>
                {storyArr.map((item:any,index:number)=>(
                    <View 
                    key={item.id.toString()}
                    style={{
                        width:widthBar,
                        height:5,
                        borderRadius:5,
                        backgroundColor:"silver"
                    }}>
                        <Animated.View
                        style={{
                            position:"absolute",
                            borderRadius:5,
                            backgroundColor:"#fff",
                            width:(currentIndex == index) ? progress : 0,
                            height:5
                        }}
                        />
                    </View>
                ))}
            </View>
            <View style={{
                flex:1
            }}>

                <Animated.Image
                onLoadEnd={()=>startStory()}
                style={{
                    height:height,
                    width:width
                }}

                source={{uri:storyArr[currentIndex].url}}
                />
                <View style={{
                    position:"absolute",
                    height:height,
                    width:width,
                    justifyContent:"space-between",
                    flexDirection:"row"
                }}>
                    <TouchableOpacity
                    onPress={()=>previousStory()}
                    style={{
                        height:"100%",
                        width:"40%",
                    }}
                    />
                    <TouchableOpacity
                    onPress={()=>nextStory()}
                    style={{
                        height:"100%",
                        width:"40%",
                    }}
                    />
            
                </View>
            </View>
           
            
        </View>
    )

}
export default StoryViewer