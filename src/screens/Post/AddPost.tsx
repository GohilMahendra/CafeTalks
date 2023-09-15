import React, { useContext, useState } from 'react'
import { View ,ScrollView, Text, Modal , Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import { ThemeContext } from '../../globals/ThemeContext';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import {launchCamera,launchImageLibrary} from "react-native-image-picker";
import { Image } from 'react-native-elements';
import { Auth, Storage } from "aws-amplify";
import { ViewBase } from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackRoutesParams } from '../../navigation/RootNavigation';
import Header from '../../components/global/Header';
const { width, height } = Dimensions.get("window")
const AddPost = () =>
{
    const { theme } = useContext(ThemeContext)
    const darkmode = theme.mode == "dark"
    const colors = theme.colors
    const navigation =  useNavigation<NativeStackNavigationProp<RootStackRoutesParams,"AddPost">>()
    const route = useRoute<RouteProp<RootStackRoutesParams,"AddPost">>()
    const CreatePost = async() =>
    {
       
        const images = route.params.images
        const video = route.params.video

        
       
    }
    return(
        <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
            flex:1,
            backgroundColor: colors.ColorBackground
        }}>
            <Header
            screenName='Add Post'
            onBackPress={()=>navigation.goBack()}
            />
            <View style={{
                flex:1,
                padding:20
            }}>
           
         
            <View style={{
                justifyContent:"space-between",
                flex:1,
                alignItems:"center"
            }}>
                <TextInput
                placeholder='Add caption for Post ...'
                placeholderTextColor={theme.colors.TextColorSecondary}
                
                style={{
                    backgroundColor:theme.colors.ColorSecondary,
                    height:200,
                    fontSize:18,
                    color:theme.colors.TextColor,
                    padding:10,
                    fontWeight:"500",
                    borderRadius:15,
                    width:"100%",
                    alignSelf:"center",
                    textAlignVertical:"top"
                }}
                />
               
            
                <TouchableOpacity 
                onPress={()=>CreatePost()}
                style={{
                    borderRadius:20,
                    width:"100%",
                }}>
                    <LinearGradient 
                    style={{
                        padding:15,
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
                            fontWeight:"600"
                        
                        }}>Publish</Text>
                    </LinearGradient>

                </TouchableOpacity>
            </View>
            </View>

     
        </KeyboardAvoidingView>
    )
}
export default AddPost
const styles = StyleSheet.create({

})