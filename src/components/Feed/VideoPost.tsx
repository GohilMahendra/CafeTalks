import React, {  useContext, useEffect, useRef, useState } from 'react'
import { View,Text,Image,TouchableOpacity, useWindowDimensions, Animated } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import Video from 'react-native-video'
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler'
import MaskedView from '@react-native-masked-view/masked-view'
import LinearGradient from 'react-native-linear-gradient'

type VideoPostProps = {
    visible:boolean
}
const VideoPost = React.memo((props:VideoPostProps) => 
{

    const {theme} = useContext(ThemeContext)
    const {width,height} = useWindowDimensions()
    const textColor = "#fff"
    const [paused,setPaused] = useState(false)
    const [liked,setLiked] = useState(false)
    const { visible } = {...props}
    const heartAnim = useRef(new Animated.Value(0));
    const TranslateAnim = useRef(new Animated.Value(0))
    const roatateAnim = useRef(new Animated.Value(0))
    const doubleTapRef = useRef()
    let positionY = useRef(new Animated.Value(height/2 - 20))
    let positionX = useRef(new Animated.Value(width/2))
    const Description = `After hearing that his brother's divorce is still happening, 
    Harvey lashes out at Louis when he asks Harvey 
    to fill in for him at a meeting so he can spend 
    the afternoon with Sheila. Louis then decides it's 
    time for the two of them to work on their 
    relationship`
    const onDoubleTap = () =>
    {
        console.log("double perss")
    
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
            setLiked(true)
        });
    }

    useEffect(()=>{
        // if(visible && paused)
        // {
        //     setPaused(false)
        // }
        // else
        // {
        //     setPaused(true)
        // }
    },[visible])
    return(
        <View style={{
            flex:1
        }}>
            <View style={{
                flexDirection:"row",
                padding:20,
                position:'absolute',
                zIndex:10,
                width:width,
                justifyContent:"space-between",
                alignItems:'center'
            }}>
                <View style={{
                    flexDirection:"row"
                }}>
                <Image
                source={require("../../../assets/images/car.jpeg")}
                style={{
                    height:50,
                    width:50,
                    backgroundColor:"silver",
                    borderRadius:50,
                    marginRight:10
                }}
                />
                <Text style={{
                    color:textColor,
                    fontSize:15,
                    textAlignVertical:"top",
                    marginRight:10,
                    fontWeight:"700"
                }}>
                    example_userName
                </Text>
                </View>
                <View style={{
                    flexDirection:"row"
                }}>
                <TouchableOpacity
                style={{
                    borderColor:textColor,
                    borderWidth:1,
                    justifyContent:'center',
                    alignItems:"center",
                  ///  height:30,
                    borderRadius:10,
                    elevation:5,
                    alignSelf:"center",
                    marginRight:20

                }}
                >
                    <Text style={{
                        margin:5,
                        textAlignVertical:"center",
                        color:textColor,
                        
                    }}>Follow</Text>
                </TouchableOpacity>

                <FontAwesome5Icon
                name='ellipsis-h'
                size={20}
                color={textColor}
                style={{}}
                />
                </View>

            </View>
                    
            <GestureHandlerRootView
            onTouchStart={(e)=>{
                positionX.current.setValue(e.nativeEvent.locationX) 
                positionY.current.setValue(e.nativeEvent.locationY)
            }}
            >
                    <TapGestureHandler
                    waitFor={doubleTapRef}
                    onActivated={() => setPaused(!paused)}
                    >
                        <TapGestureHandler
                            ref={doubleTapRef}
                            numberOfTaps={2}
                            maxDelayMs={500}
                            onActivated={() => onDoubleTap()}
                        >
                        <View>
                        <Video
                        repeat
                        paused={paused}
                        resizeMode="cover"
                        style={{
                            height: height - 200,
                            width:width
                        }}
                        source={require("../../../assets/videos/aui.mp4")}
                        />
                        </View>
                        </TapGestureHandler>
                        </TapGestureHandler>
                        </GestureHandlerRootView>
            <View style={{
                 padding:20,
            }}>
          
            <View style={{
                flexDirection:"row",

            }}>
                    <FontAwesome5Icon
                    onPress={()=>setLiked(!liked)}
                    name='heart'
                    size={30}
                    solid = {liked}
                    color={(liked)?"red":theme.colors.TextColor}
                    style={{
                        marginRight:20
                    }}
                    />
                    <Feather
                    name='message-square'
                    size={30}
                    color={theme.colors.TextColor}
                    style={{
                        marginRight:20
                    }}
                    />
                     <Feather
                    name='send'
                    size={30}
                    color={theme.colors.TextColor}
                    style={{
                        marginRight:20
                    }}
                    />
            </View>
            <Text style={{
                color: theme.colors.TextColorSecondary,
                flexWrap:"wrap"
            }}>{Description}</Text>
            </View>
            <Animated.View
                style={[{
                    position:"absolute",
                    top:positionY.current,
                    left:positionX.current,
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
    
                    <MaskedView
                    maskElement={ <FontAwesome5Icon
                        name={"heart"}
                        size={70}
                        color={"violet"}
                        solid = {true}
                        />}
                    >
                          <LinearGradient 
                        style={{
                            height:70,
                            width:70,
                        }}
                      colors={[theme.colors.gradient_primary,theme.colors.gradient_secondry]}
                    ></LinearGradient>
                    </MaskedView>   
            </Animated.View>
          
         </View>
    )

}
)
export default VideoPost