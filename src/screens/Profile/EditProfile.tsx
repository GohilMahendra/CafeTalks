import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, Modal, SafeAreaView,ScrollView, StyleSheet, Text ,TextInput, TouchableOpacity, View } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import Header from '../../components/global/Header'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ProfileStackParams } from '../../navigation/ProfileStackNavigation'
import { Image } from 'react-native-elements'
import { DummyImage } from '../../globals/data'
import { colors } from '../../globals/theme'
import Feather from "react-native-vector-icons/Feather";
import { launchImageLibrary } from 'react-native-image-picker'
import { Auth, Storage,API,graphqlOperation  } from "aws-amplify";
import { updateUser } from '../../graphql/mutations'
import { UpdateUserInput } from '../../API'
import RNFS from "react-native-fs";
const EditProfile = () =>
{

    const {theme} = useContext(ThemeContext)
    const themeColor = theme.colors
    const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParams>>()
    const routes = useRoute<RouteProp<ProfileStackParams,"EditProfile">>()
    const userName = routes.params.user_name
    const email = routes.params.email
    const user_image = routes.params.profile_picture
    const user_fullName = routes.params.full_name
    const user_bio = routes.params.bio
    const [bio,setBio] = useState(user_bio)
    const [fullName,setFullName] = useState(user_fullName)
    const [ProfilePicture,setProfilePicture] = useState<string |null>(user_image)
    const [mediaModal,setMediaModal] = useState(false)

    const openImagePicker=async()=>
    {
        setMediaModal(false)
        const response = await launchImageLibrary({
           mediaType:"photo",
           presentationStyle:"popover"
        })

        if(!response.didCancel)
        {
          if(response.assets?.[0])
          {
            setProfilePicture(response.assets[0].uri || null)
          }
        }
    }
  
    const havechanges = () =>
    {
        if(user_image == ProfilePicture && user_fullName == fullName
           && user_bio == bio)
        {
            return false
        }
        return true
    }

    const updateProfile = async() =>
    {

      

        if(!havechanges())
        return

        const current_user = await Auth.currentAuthenticatedUser()
        const UID =  current_user.attributes.sub
        let key: string = ""
        if(user_image != ProfilePicture && ProfilePicture)
        {
           
            try
            {
            const fileName =UID+"/Profile/"+UID+".png"
            const file = await RNFS.re(ProfilePicture,'base64')


            const response = await Storage.put(fileName,file,{
                contentType: 'image/png', 
                level:"protected",
            
             
            })
    
            key = response.key
            console.log(key)
        }
        catch(err)
        {
            console.log(err,"error in code")
        }
          
        }
        const imagePath =await Storage.get(key)
        console.log(imagePath)
        const input:UpdateUserInput={
            id: UID,
            profile_picture:imagePath,
            bio: bio,
            name: fullName
        }
        const response = await API.graphql(graphqlOperation(updateUser,{
            input
        }))
        console.log(JSON.stringify(response))
      
    }

    return(
        <KeyboardAvoidingView
        style={{
            flex:1,
            backgroundColor:themeColor.ColorBackground
        }}
        >
            <ScrollView
            contentContainerStyle={{
                flexGrow:1,
                paddingBottom:20
            }}
            >
                <View>
                    <Header
                    screenName='Edit Profile'
                    onBackPress={()=>navigation.goBack()}
                    />

                    <TouchableOpacity
                    onPress={()=>setMediaModal(true)}
                    style={{
                        margin:20,
                        alignContent:"center",
                        alignSelf:"center"
                    }}
                    >
                    <Image
                    source={(ProfilePicture)?{uri:ProfilePicture}:DummyImage}
                    style={{
                        height:100,
                        width:100,
                        borderRadius:100,
                    }}
                    />
                    </TouchableOpacity>
                    <View style={{
                        padding:10,
                        flex:1,
                    }}>
                    <TextInput
                    editable = {false}
                    value = {userName}
                    placeholder={"username ..."}
                    placeholderTextColor={themeColor.PlaceHolderColor}
                    style={[styles.input,{
                        color: themeColor.TextColor,
                        backgroundColor: themeColor.ColorSecondary,
                    }]}
                    />
                    <TextInput
                    value = {fullName}
                    placeholder={"fullname ..."}
                    placeholderTextColor={themeColor.PlaceHolderColor}
                    onChangeText={(text:string)=>setFullName(text)}
                    style={[styles.input,{
                        color: themeColor.TextColor,
                        backgroundColor: themeColor.ColorSecondary,
                    }]}
                    />
                    <TextInput
                    value = {bio}
                    placeholder={"bio ..."}
                    placeholderTextColor={themeColor.PlaceHolderColor}
                    onChangeText={(text:string)=>setBio(text)}
                    style={[styles.input,{
                        color: themeColor.TextColor,
                        backgroundColor: themeColor.ColorSecondary,
                    }]}
                    />
                    <TextInput
                     placeholder={"email ..."}
                     placeholderTextColor={themeColor.PlaceHolderColor}
                    editable={false}
                    value = {email}
                    style={[styles.input,{
                        color: themeColor.TextColor,
                        backgroundColor: themeColor.ColorSecondary,
                    }]}
                    />
                     <TouchableOpacity
                     onPress={()=>updateProfile()}
                    style={{
                        backgroundColor:themeColor.ColorPrimary,
                        padding:20,
                        marginVertical:10,
                        justifyContent:"center",
                        alignItems:"center",
                        borderRadius:10
                    }}
                    >
                        <Text
                        style={{
                            color: colors.white,
                            fontSize:18
                        }}
                        >Save Changes</Text>
                    </TouchableOpacity>
                    </View>
                   
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
                            backgroundColor:themeColor.ColorSecondary,
                            padding:20,
                            borderRadius:20,
                        }}>
                       <View
                       style={{
                        width:50,
                        backgroundColor:themeColor.TextColor,
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
                         onPress={()=>openImagePicker()}
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


            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default EditProfile
const styles = StyleSheet.create({
    input:
    {
        padding:10,
        borderRadius:10,
        marginVertical:10,
        width:"100%"
    }
})