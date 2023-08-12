import React, { useContext, useState } from 'react'
import { View , Text, useWindowDimensions, SafeAreaView, Touchable, TouchableOpacity, Animated } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import Video from "react-native-video";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import { Image } from 'react-native-elements';

const VideoPlayer = () =>
{
    const videoUrl = require("../../../assets/videos/naruto.mp4")
    const {theme} = useContext(ThemeContext)
    const { height, width} = useWindowDimensions()
    const Descrption= `Add new AI Image with \n
    beautiful landsacpe you can see time flowing 
    around it.
    #Nature #wilderness #social #Ai
    `
    const [expanded,setExpanded] = useState(false)
    const TextValue = new Animated.Value(1)

    const onTap= () =>
    {

       if(expanded)
       {
        Animated.timing(TextValue, {
            toValue:1,
            duration: 300, // 10 seconds in milliseconds
            useNativeDriver: false,
        }).start();
       }
       else
       {
        Animated.timing(TextValue, {
            toValue:9,
            duration: 300, // 10 seconds in milliseconds
            useNativeDriver: false,
        }).start(()=>{
           setExpanded(!expanded)
        });
       }
    
    }
   
  

    return(
        <SafeAreaView style={{
            backgroundColor:theme.colors.ColorSecondary,
            flex:1,
        }}>
            <Video
            source={require("../../../assets/videos/aui.mp4")}
            paused={false}
            currentTime={3}
            style={{
                height:height,
                width:width
            }}
            resizeMode='cover'
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
                            source={require("../../../assets/images/car.jpeg")}
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
                        onPress={()=>onTap()}
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
                        onPress={()=>onTap()}
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
                    name='heart'
                    solid={false}
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


            
        </SafeAreaView>
    )
}
export default VideoPlayer