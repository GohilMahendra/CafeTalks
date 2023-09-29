import React, { useContext, useRef, useState } from 'react'
import { View,Text,Vibration,Image,TouchableOpacity, useWindowDimensions, Animated } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler'
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from 'react-native-linear-gradient'
import ImageSlider from './ImageSlider'
import { FeedType } from '../../screens/Profile/Home'
import { DummyImage } from '../../globals/data'


const ImagePost = (props: Omit<FeedType,"video">) =>
{

    const {theme} = useContext(ThemeContext)
    const {width,height} = useWindowDimensions()
    const textColor = theme.colors.TextColor
    const doubleTapRef = useRef()
    const [liked ,setLiked] = useState<boolean>(false)
    console.log(props.images)
    const {
        comments,
        id,
        images,
        likes,
        name,
        profilePicture,
        tags,
        userName
    } = props
    const Description = `To all the people why we are here is not a quesiton of marl \n
    ites  The faith wich lead us yhye \n
    ites  The faith wich lead us yhye \n
    ites  The faith wich lead us yhye \n
    `
    const heartAnim = useRef(new Animated.Value(0));
    const TranslateAnim = useRef(new Animated.Value(0))
    const roatateAnim = useRef(new Animated.Value(0))
   
    let positionY = useRef(new Animated.Value(height/2 - 20))
    let positionX = useRef(new Animated.Value(width/2))

    console
    const onDoubleTap = () =>
    {
        Vibration.vibrate()
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
            setLiked(true)
        });
    }
  
    return(
        <View style={{
            flex:1
        }}>
            <View style={{
                flexDirection:"row",
                padding:10,
                justifyContent:"space-between",
                alignItems:'center'
            }}>
                <View style={{
                    flexDirection:"row"
                }}>
                <Image
                source={profilePicture?{uri:profilePicture}:DummyImage}
                style={{
                    height:50,
                    width:50,
                    backgroundColor:"silver",
                    borderRadius:50,
                    marginRight:10
                }}
                />
                <View>              
                     <Text style={{
                    color:textColor,
                    fontSize:15,
                    marginRight:10,
                    fontWeight:"700"
                     }}>
                   {name}
                      </Text>
                      <Text style={{
                    color:theme.colors.PlaceHolderColor,
                    fontSize:15,
                    marginRight:10,
                    fontWeight:"700"
                     }}>
                   {userName}
                      </Text>
                </View>
                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center"
                }}>
                <TouchableOpacity
                style={{
                    borderColor:textColor,
                    borderWidth:1,
                    justifyContent:'center',
                    alignItems:"center",
                    borderRadius:10,
                    marginRight:10
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
                   //onActivated={() => setPaused(!paused)}
                >
                    <TapGestureHandler
                        ref={doubleTapRef}
                        numberOfTaps={2}
                        maxDelayMs={500}
                        onActivated={() => onDoubleTap()}
                    >
                    <View>
                    <ImageSlider
                    images={images}
                    />
                    </View>
                    </TapGestureHandler>
                </TapGestureHandler>
            </GestureHandlerRootView>
            <View style={{
                padding:10,

            }}>
                <View style={{
                    flexDirection:"row"
                }}>
                    <FontAwesome5Icon
                    onPress={()=>setLiked(!liked)}
                    name='heart'
                    size={30}
                    solid = {liked}
                    color={(liked)?"red":textColor}
                    style={{
                        marginRight:20
                    }}
                    />
                    <Feather
                    name='message-square'
                    size={30}
                    color={textColor}
                    style={{
                        marginRight:20
                    }}
                    />
                     <Feather
                    name='send'
                    size={30}
                    color={textColor}
                    style={{
                        marginRight:20
                    }}
                    />
                </View>
                <Text>{Description}</Text>
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
export default ImagePost