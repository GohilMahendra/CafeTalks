import React, { useCallback, useContext, useRef, useState } from 'react'
import { View , Text, useWindowDimensions, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, Animated } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import Video from "react-native-video";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import { Image, Slider } from 'react-native-elements';
import { Gesture ,GestureHandlerRootView, GestureDetector, TapGestureHandler  } from "react-native-gesture-handler";

const VideoPlayer = () =>
{
    const {theme} = useContext(ThemeContext)
    const { height, width} = useWindowDimensions()
    const videoRef = useRef<Video | null>(null)
    const [dragging,setDragging] = useState(false)
    const [videoLength,setVideoLength] = useState(0)
    const [currentPos,setCurrentPos] = useState(0)
    const [paused , setPaused] = useState(false)
    const heartAnim = useRef(new Animated.Value(0));
    const TranslateAnim = useRef(new Animated.Value(0))
    const roatateAnim = useRef(new Animated.Value(0))
   
    const [isLiked, setIsLiked] = useState(false)
    const TapRef = useRef()
    const Descrption= `Add new AI Image with \n
    beautiful landsacpe you can see time flowing 
    around it.
    #Nature #wilderness #social #Ai
    `
    const [expanded,setExpanded] = useState(false)
    const TextValue = new Animated.Value(1)
   
    
    const setEndDuration=(event:any)=>
    {
      
     if(!dragging)
     {
        setCurrentPos(event.currentTime)
        if(videoLength == 0)
        {
            setVideoLength(event.seekableDuration)
        }
     }
     
    }
    const seekToVideo = (event:any) =>
    {
      setDragging(true)
      videoRef.current?.seek(event)
    }
  
    const seekComplete = () =>
    {
       setDragging(false)
    }

    const onDoubleTap = () =>
    {
        TranslateAnim.current.setValue(0)
        roatateAnim.current.setValue(0)
        heartAnim.current.setValue(0)
     
        Animated.sequence([
            // increase size
            Animated.timing(heartAnim.current, {
                toValue: 1.7,
                duration: 200,
                useNativeDriver: false
            }),
            Animated.timing(roatateAnim.current, {
                toValue: 1,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(roatateAnim.current, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(TranslateAnim.current, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false
            }),

        ]).start(()=>{
            TranslateAnim.current.setValue(0)
            roatateAnim.current.setValue(0)
            heartAnim.current.setValue(0)
            setIsLiked(true)
        });
    }
  
    
    return(
        <SafeAreaView style={{
            backgroundColor:theme.colors.ColorSecondary,
            flex:1,
        }}>
            <GestureHandlerRootView style={{
                flex:1
            }}>
              <TapGestureHandler
                waitFor={TapRef}
                onActivated={() => setPaused(!paused)}
            >
                <TapGestureHandler
                    ref={TapRef}
                    numberOfTaps={2}
                    maxDelayMs={500}
                    onActivated={() => onDoubleTap()}
                >
            <View style={{
                flex:1
            }}>
            <Video
            ref={ref=> videoRef.current = ref}
            source={require("../../../assets/videos/aui.mp4")}
            paused={paused}
            repeat
            currentTime={currentPos}
            style={{
                height:height*90/100,
                width:width
            }}
            
            resizeMode='cover'
            onProgress={(e)=>setEndDuration(e)}
            />
            
                <View style={{
                    width:"80%",
                    marginVertical:20,
                    position:"absolute",
                    margin:20,
                    bottom:20
                }}>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        width:"100%",
                        
                    }}>
                        <TouchableOpacity style={{
                            marginRight:10
                        }}>
                            <Image 
                            resizeMethod="resize"
                            resizeMode="cover"
                            source={{uri:"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974740819/jujutsu-kaisen-the-official-anime-guide-season-1-9781974740819_hr.jpg"}}
                            style={{
                                resizeMode:"contain",
                                borderRadius:50,
                                height:50,
                                width:50,
                                borderWidth:2,
                                borderColor:theme.colors.ColorPrimary,

                            }}></Image>
                        </TouchableOpacity>
                        <Text style={{
                            color:"#fff",
                            fontSize:18,
                            fontWeight:"bold",
                            marginRight:10
                        }}>
                            Example name
                        </Text>
                        <TouchableOpacity 
                        style={{
                            padding:5,
                            borderWidth:0.5,
                            borderColor:theme.colors.TextColor,
                            justifyContent:'center',
                            alignItems:"center",
                            borderRadius:10,
                        }}>
                            <Text style={{
                                fontSize:18,
                                color: theme.colors.TextColor
                            }}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Animated.Text 
                        numberOfLines={TextValue}
                        style={{
                            color:"#fff",
                            fontSize:18,
                            alignSelf:"flex-start",
                            textAlign:"left",
                            marginVertical:10
                            
                        }}>
                          {Descrption}
                        </Animated.Text>
                    </View>
                </View>
                <View style={{
                    justifyContent:"space-between",
                    right:20,
                    bottom:20,
                    position:"absolute"
                }}>
                    <FontAwesome5
                    onPress={()=>onDoubleTap()}
                    name='heart'
                    solid={(isLiked)?true:false}
                    color={theme.colors.TextColor}
                    size={30}
                    style={{
                        marginVertical:20
                    }}
                    />
                    <FontAwesome5
                    name='comment'
                    solid={false}
                    color={theme.colors.TextColor}
                    size={30}
                    style={{
                        marginVertical:20
                    }}
                    />
                    <Feather
                    name='send'
                   // solid={false}
                    color={theme.colors.TextColor}
                    size={30}
                    style={{
                        marginVertical:20,
                        shadowColor:theme.colors.ColorBackground,
                        shadowRadius:10,
                        shadowOffset:{
                            height:5,
                            width:10
                        }
                    }}
                    />
                    <FontAwesome5
                    name='ellipsis-h'
                    solid={false}
                    color={theme.colors.TextColor}
                    size={30}
                    style={{
                        marginVertical:20
                    }}
                    />
                   
                </View>
                <View style={{
                    position:"absolute",
                    bottom:10,
                    width:width
                }}>
                    <Slider
                    maximumValue={videoLength}
                    value={currentPos}
                    minimumValue={0}
                    minimumTrackTintColor="#fff"
                    maximumTrackTintColor="silver"
                    thumbTintColor="transparent"
                    allowTouchTrack={true}
                    style={{
                        width:"100%",
                        height:40,
                    }}
                    onValueChange={(e)=>seekToVideo(e)}
                    onSlidingComplete={(e)=>seekComplete()}
                    />
                </View>
                <Animated.View
                style={[{
                    position:"absolute",
                    top:height/2-20,
                    alignSelf:"center",
                    elevation:10,
                    transform:[{
                        scale:heartAnim.current,
                    },{
                        rotate: roatateAnim.current.interpolate({
                            inputRange:[0,1],
                            outputRange:["0deg" , "30deg"]

                        })
                    },{
                        translateY: TranslateAnim.current.interpolate({
                            inputRange:[0,1],
                            outputRange:[0, -height/2]
                        })
                    }]
                }]}
                >
                    <FontAwesome5
                    name={"heart"}
                    size={70}
                    color={"violet"}
                    solid = {true}
                    />
                </Animated.View>
            </View>
            </TapGestureHandler>
            </TapGestureHandler>
        
            </GestureHandlerRootView>
           
            
        </SafeAreaView>
    )
}
export default VideoPlayer