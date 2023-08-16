import React, { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react'
import { View,Text,Image,TouchableOpacity, useWindowDimensions } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Video from 'react-native-video'


type VideoPostProps = {
    visible:boolean
}
const VideoPost = React.memo((props:VideoPostProps) => 
{

    const {theme} = useContext(ThemeContext)
    const {width,height} = useWindowDimensions()
    const textColor = "#F5F5F5"
    const [paused,setPaused] = useState(false)
    const [liked,setIsLiked] = useState(false)
    const { visible } = {...props}

    useEffect(()=>{
        if(visible && paused)
        {
            setPaused(false)
        }
        else
        {
            setPaused(true)
        }
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
            <Video
            repeat
            paused={paused}
            resizeMode="cover"
            style={{
                height: height - 200,
                width:width
            }}
            source={require("../../..//assets/videos/aui.mp4")}
            ></Video>
         </View>
    )

}
)
export default VideoPost