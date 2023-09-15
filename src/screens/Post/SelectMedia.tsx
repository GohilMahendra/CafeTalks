import React, { useContext, useState } from 'react'
import { View , Text, TouchableOpacity, useWindowDimensions, SafeAreaView, Modal, Alert } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import Header from '../../components/global/Header'
import { colors } from '../../globals/theme'
import FontAwesome5 from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import { launchImageLibrary } from 'react-native-image-picker'
import ImageCorousal from '../../components/post/ImageCarousal'
import { useNavigation } from '@react-navigation/native'
import { RootStackRoutesParams } from '../../navigation/RootNavigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
const SelectMedia = () =>
{
    const {theme} = useContext(ThemeContext)
    const {height,width} = useWindowDimensions()
    const [images,setImages] = useState<string[]>([])
    const [video,setVideo] = useState<null|string>()
    const [mediaModal,setMediaModal] = useState<boolean>(false)
    const navigation = useNavigation<NativeStackNavigationProp<RootStackRoutesParams,"SelectMedia">>()
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

    const goToAddPost = () =>
    {
        if(images.length == 0 && !video)
        {
            Alert.alert("Please select medium")
            return
        }
        navigation.navigate("AddPost",{
            images: images.length > 0 ? images:null,
            video: video ? video : null
        })

    }

    return(
        <SafeAreaView style={{
            flex:1,
            backgroundColor:theme.colors.ColorBackground,
        }}>
            <Header
            screenName='Select Media'
            onBackPress={()=>console.log("back")}
            />
            <View style={{
                flex:1,
                alignItems:"center",
                justifyContent:'space-between'
            }}>
           { (images.length == 0 && !video) && <TouchableOpacity
            onPress={()=>setMediaModal(true)}

            style={{
                height:height*70/100,
                width:width*80/100,
                backgroundColor:theme.colors.ColorSecondary,
                justifyContent:"center",
                alignItems:'center',
                borderRadius:30,
                   
            }}
            >
                <Text style={{
                    color: theme.colors.TextColor,
                    fontSize:50,
                    fontWeight:"500",
                    elevation:10,
                    shadowColor:colors.white,
                    shadowOffset:{
                        width:2,
                        height:2
                    }
                }}>+</Text>
            </TouchableOpacity>
        }
        {
          (images.length > 0 && !video) &&
          <ImageCorousal
          images={images}
          />
        }
            <TouchableOpacity
            onPress={()=>goToAddPost()}
            style={{
                width:width*90/100,
                padding:15,
                backgroundColor: theme.colors.ColorPrimary,
                alignItems:'center',
                justifyContent:'center',
                marginVertical:10,
                borderRadius:15,
            }}
            >
                <Text
                style={{
                    color: colors.white,
                    fontWeight:'500',
                    fontSize : 20
                }}
                >Create Post</Text>
            </TouchableOpacity>
            </View>
            <Modal
            animationType="slide"
            transparent={true}
            visible = {mediaModal}
            onRequestClose={()=>setMediaModal(false)}
            >
                <View style={{
                    flex:1,
                    justifyContent:'flex-end',
                    alignItems:"flex-end",
                    backgroundColor:"rgba(0,0,0,.7)"
                }}>
                    <View
                    style={{
                        backgroundColor:"Transparent",
                        width:"100%",
                        borderRadius:20,
                        padding:20,
                        
                    }}
                    >
                        <View style={{
                            backgroundColor:theme.colors.ColorSecondary,
                            padding:20,
                            borderRadius:20,
                        }}>
                       <View
                       style={{
                        width:50,
                        backgroundColor:theme.colors.TextColor,
                        height:5,
                        alignSelf:"center",
                        borderRadius:5
                       }}
                       />
                        <TouchableOpacity 
                        onPress={()=>openImagePicker()}
                        style={{
                            flexDirection:"row",
                            padding:10,
                            borderBottomColor:"grey",
                            borderBottomWidth:1,
                            borderRadius:10,
                            marginVertical:5
                        }}>
                            <Feather
                            name={"camera"}
                            size={30}
                            color={theme.colors.TextColor}
                            style={{
                                marginRight:20
                            }}
                            />
                            <Text style={{
                                fontSize:20,
                                color:theme.colors.TextColor
                            }}>Select photos To add</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                         onPress={()=>openVideoSelector()}
                        style={{
                            flexDirection:"row",
                            padding:10,
                            borderRadius:10
                
                        }}>
                            <Feather
                            name={"video"}
                            size={30}
                            color={theme.colors.TextColor}
                            style={{
                                marginRight:20
                            }}
                            />
                            <Text style={{
                                fontSize:20,
                                color:theme.colors.TextColor
                            }}>Select Video To add</Text>
                        </TouchableOpacity>
                        </View>
                        <TouchableOpacity 
                        onPress={()=>setMediaModal(false)}
                        style={{
                            marginVertical:10,
                            backgroundColor:theme.colors.ColorSecondary,
                            padding:20,
                            borderRadius:10,
                            justifyContent:"center",
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontSize:20,
                                color:theme.colors.TextColor
                            }}>Cancel</Text>
                        </TouchableOpacity>
                      
                    </View>

                </View>

            </Modal>


        </SafeAreaView>
    )

}
export default SelectMedia