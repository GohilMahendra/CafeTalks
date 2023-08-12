import React, { useContext, useEffect, useState } from 'react'
import { View , Text, Modal , Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { ThemeContext } from '../../../globals/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import {launchCamera,launchImageLibrary} from "react-native-image-picker";
import { Image } from 'react-native-elements';
const { width, height } = Dimensions.get("window")
const AddPost = () =>
{
    const { theme } = useContext(ThemeContext)
    const darkmode = theme.mode == "dark"
    const colors = theme.colors
    const navigation =  useNavigation()
    const [images,setImages] = useState<string[]>([])
    const [video,setVideo] = useState([])
    const [mediaModal, setMediaModal] = useState(false)
    const [captionModal, setCaptionModal] = useState(false)
    const [caption, setcaption] = useState("")
  
    const openImagePicker = async() =>
    {
        setMediaModal(false)
        const response = await launchImageLibrary({
            mediaType:"photo",
            formatAsMp4:true,
            selectionLimit:5,
        })

        if(!response.didCancel)
        {
            let images:string[] = []
            response.assets?.forEach((image)=>{
                const singleImage:string = image.uri || ""
                images.push(singleImage)
            })
            setImages(images)
        }
    } 

    const openVideoSelector = async() =>
    {
        
        const response = await launchImageLibrary({
            mediaType:"video",
            formatAsMp4:true,
            selectionLimit:5,
        })

        if(!response.didCancel)
        {

        }
    }
    return(
        <KeyboardAvoidingView style={{
            flex:1,
            padding:20,
            backgroundColor: colors.ColorBackground
        }}>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                <FontAwesome5
                name={"angle-left"}
                size={30}
                color={colors.TextColor}
                />
                <Text style={{
                    color: colors.TextColor,
                    fontSize:20
                }}>Add Post</Text>
                <View/>
            </View>
            <View style={{
                flex:1,
            }}>
           
            <TouchableOpacity 
            onPress={()=>setMediaModal(true)}
            style={{
                height:height*30/100,
                width:width*50/100,
                borderRadius:20,
                alignSelf:"center",
                justifyContent:'center',
                alignItems:"center",
                margin:20,
                elevation:10,
                backgroundColor: colors.ColorSecondary
            }}>
          
           <FontAwesome5
            name='plus-circle'
            color={colors.TextColor}
            style={{
                fontSize:30,
                elevation:10,
                position:"absolute",
                zIndex:10,
                right:-5,
                top:-5
            }}
            />
            {images.length == 0 && video.length ==0 
            ?
            <FontAwesome5
            name= {"image"}
            color={theme.colors.TextColor}
            style={{
                fontSize:30
            }}
            />
            :
            <Image 
            source={{uri:images[images.length-1]}}
            style={{
                flex:1,
                borderRadius:20,
                resizeMode:"cover",
                overflow:"hidden",
                height:height*30/100,
                width:width*50/100,
            }}/>
            }
            </TouchableOpacity>

            <View style={{
                justifyContent:"space-between",
                flex:1
            }}>
                <TouchableOpacity
                onPress={()=>setCaptionModal(true)}
                style={{
                    height:"40%",
                    backgroundColor:colors.ColorSecondary,
                    elevation:5,
                    borderRadius:20,
                    padding:20
                }}
                >
                    <Text style={{
                        color: colors.TextColor,
                        fontSize:15,
                    }}>{
                        caption == ""
                        ? "Add caption ..."
                        :caption
                    }</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={{
                    height:70,
                    borderRadius:20,
                    width:"100%",
                }}>
                    <LinearGradient 
                    style={{
                        flex:1,
                        borderRadius:20,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    start={{x:1,y:12}}
                    end={{x:20,y:34}}
                    colors={[colors.ColorPrimary,"rgba(0,0,0,0.8)"]}
                    >
                        <Text style={{
                            fontSize:20,
                            color:"#fff",
                        
                        }}>Publish</Text>
                    </LinearGradient>

                </TouchableOpacity>
            </View>
            </View>

            <Modal
            visible={captionModal}
            transparent={true}
            > 
            <View style={{
                flex:1,
                padding:20,
                backgroundColor:colors.ColorBackground
            }}>
                 <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                <FontAwesome5
                onPress={()=>setCaptionModal(false)}
                name={"angle-left"}
                size={30}
                color={colors.TextColor}
                />
                <Text style={{
                    color: colors.TextColor,
                    fontSize:18,
                    textAlign:"center",
                    textAlignVertical:"center"
                }}>Add Caption</Text>
               
                <TouchableOpacity
                onPress={()=>setCaptionModal(false)}
                >
                    <Text style={{
                        fontSize:18,
                        color: theme.colors.ColorPrimary
                    }}>Add</Text>
                </TouchableOpacity>
            </View>
                <View style={{
                    flex:1,
                    justifyContent:"space-between"
                }}>
                <TextInput
                value={caption}
                onChangeText={(text:string)=>setcaption(text)}
                disableFullscreenUI={true}
                style={{
                    textAlignVertical:"top",
                    color: theme.colors.TextColor,
                    fontSize:15,
                    elevation:5,
                    height:"25%",
                    borderRadius:20,
                    marginVertical:20,
                    padding:20,
                    backgroundColor: colors.ColorSecondary
                }}
                placeholderTextColor={theme.colors.TextColor}
                placeholder= {"add caption here ..."}
                numberOfLines={5}
                />
               
                </View>
            </View>
            </Modal>
            <Modal
            animationType="slide"
            transparent={true}
            visible = {mediaModal}
            onRequestClose={()=>setMediaModal(false)}
            >
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:"flex-end",
                    padding:20,
                    backgroundColor:"rgba(0,0,0,.7)"
                }}>
                    <View
                    style={{
                       
                        backgroundColor:colors.ColorSecondary,
                        width:"100%",
                        borderRadius:20,
                        padding:20
                    }}
                    >
                        <Entypo
                        onPress={()=>setMediaModal(false)}
                        name={"squared-cross"}
                        size={30}
                        style={{
                            alignSelf:"flex-end",
                        }}
                        color={colors.ColorPrimary}
                        />
                        <Text style={{
                            fontSize:20,
                            color:colors.ColorPrimary,
                            alignSelf:"center"
                        }}>
                            Add Media Option
                        </Text>
                        <View style={{
                            margin:20,
                            flexDirection:"row",
                            justifyContent:"space-between"
                        }}>
                            <TouchableOpacity
                            onPress={()=>openImagePicker()}
                            style={{
                                alignItems:"center",
                                backgroundColor:colors.ColorSecondary,
                                elevation:10,
                                borderRadius:20,
                                padding:10,
                                shadowColor:(theme.mode=="dark")?"#fff":"black",
                                shadowOpacity:1,
                                shadowOffset:{
                                    height:10,
                                    width:10
                                }
                            }}
                            >
                                <FontAwesome5 
                                name={"image"}
                                color={colors.ColorPrimary}
                                size={30}
                                ></FontAwesome5>
                                <Text style={{
                                    fontSize:20,
                                    color: colors.ColorPrimary,
                                    margin:10
                                }}>Add Image</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                            style={{
                                alignItems:"center",
                                backgroundColor:colors.ColorSecondary,
                                elevation:10,
                                padding:10,
                                borderRadius:20,
                                shadowColor:(theme.mode=="dark")?"#fff":"black",
                                shadowOpacity:1,
                                shadowOffset:{
                                    height:10,
                                    width:10
                                }
                            }}
                            >
                                <Entypo 
                                name={"video-camera"}
                                color={colors.ColorPrimary}
                                size={30}
                                ></Entypo>
                                <Text style={{
                                    fontSize:20,
                                    color: colors.ColorPrimary,
                                    margin:10
                                }}>Add Video</Text>
                            </TouchableOpacity>
                        </View>
                       
                    </View>

                </View>

            </Modal>
           
           
        </KeyboardAvoidingView>
    )
}
export default AddPost
const styles = StyleSheet.create({

})