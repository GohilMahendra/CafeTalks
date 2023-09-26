import React, { useContext, useState } from 'react'
import { View ,ScrollView, Text, Modal , Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import RNFS from 'react-native-fs'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackRoutesParams } from '../../navigation/RootNavigation';
import Header from '../../components/global/Header';
import { API, Auth, Storage, graphqlOperation ,} from 'aws-amplify';
import uuid from 'react-native-uuid';
import { CreatePostInput, MediaType } from "../../API";
import { createPost } from '../../graphql/mutations';
const { width, height } = Dimensions.get("window")
const AddPost = () =>
{
    const { theme } = useContext(ThemeContext)
    const darkmode = theme.mode == "dark"
    const colors = theme.colors
    const navigation =  useNavigation<NativeStackNavigationProp<RootStackRoutesParams,"AddPost">>()
    const route = useRoute<RouteProp<RootStackRoutesParams,"AddPost">>()
    const [caption,setCaption] = useState("")
    const CreateNewPost = async() =>
    {
       
        const images:string[] = route.params.images
        const video = route.params.video
        
        const user = await Auth.currentAuthenticatedUser({
            bypassCache: true
        })
        const UID  =  user.attributes.sub
        const postID = uuid.v4()
        let imageResponses:string[] = []
        if(images.length > 0)
        {
            for (let i=0;i < images.length ; ++i )
            {
                const fileId = uuid.v4()
                const fileName = fileId + ".png"
                const imagePath = "Posts/" + UID + "/" + fileName
                try
                {
                    // Upload the photo to S3
                    
                    const image = images[i]
                    const imageResponse =await RNFS.readFile(image,"base64")
                  
                    const response = await Storage.put(imagePath,imageResponse,{
                        contentType: 'image/png',
                        level:"protected"
                    })
                   imageResponses.push(response.key)
                  
                }
                catch(err)
                {
                    console.log(err)
                }
    
            }

            const input:CreatePostInput = 
            {
                
                content: caption,
                likes: 0,
                type:MediaType.IMAGES,
                images:imageResponses,
                short:null,
                userID: UID,
                tags:[],
                comments:0
            }

        
            const response = await API.graphql(graphqlOperation(createPost,{
                input
            }))
            console.log(JSON.stringify(response))

        }

        
       
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
                value={caption}
                onChangeText={(text:string)=>setCaption(text)}
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
                onPress={()=>CreateNewPost()}
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