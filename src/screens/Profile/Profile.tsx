import React, { useContext, useEffect, useState } from 'react'
import { View , Text, SafeAreaView, FlatList, Systrace } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import { Image } from 'react-native-elements'
import { DummyImage } from '../../globals/data'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Auth, API, graphqlOperation} from 'aws-amplify'
import { getUser } from "../../graphql/queries"
import { GetUserQuery } from '../../API'
import { GraphQLResult } from '@aws-amplify/api-graphql'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { UserTabNavigationParams } from '../../navigation/UserTabNavigation'
import { ProfileStackParams } from '../../navigation/ProfileStackNavigation'

export type User = 
{
    name: string,
    user_name: string,
    image: string | null,
    bio: string,
    email: string
}
const Profile = () =>
{
    const { theme } = useContext(ThemeContext)
    const [selectedMedia , setSelectedMedia] = useState<boolean>(true)
    const [media,setMedia] = useState([])
    const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParams>>()
    const [user, setUser] = useState<User>({
        bio:"",
        image: null,
        name:"",
        user_name:"",
        email: ""
    })

    const getUserDetails = async() =>
    {
        const currentUser = await Auth.currentAuthenticatedUser({
            bypassCache: false
        })
        const user_id = currentUser.attributes.sub
        
        const user: GraphQLResult<any> = (await API.graphql(graphqlOperation(getUser,{id:user_id})))
      
        console.log(JSON.stringify(user))
        setUser({
            bio: user.data?.getUser?.bio,
            image: user.data.getUser.profile_picture,
            name: user.data.getUser.name,
            user_name:  user.data.getUser.user_name,
            email: user.data.getUser.email,
        })

    }
    useEffect(()=>{
        getUserDetails()
    },[])
    return(
        <SafeAreaView style={[styles.Container,{
            backgroundColor: theme.colors.ColorBackground
        }]}>
            
                <View style={styles.infoContainer}>
                    <Text style={[styles.textUserName,{
                        color: theme.colors.TextColor
                    }]}>{user.user_name}</Text>
                    <FontAwesome5Icon
                    name='plus-square'
                    color={theme.colors.TextColor}
                    size={30}
                    />
                </View>
                <View style={{
                    padding:20
                }}>
                
                    <View style={styles.infoRowContainer}>
                        <Image
                        source={(user.image)?{uri: user.image}:DummyImage}
                        style={styles.imgProfile}
                        />
                        <View style={styles.countContainer}>
                            <Text style={[styles.countText,{
                                color: theme.colors.TextColorSecondary,
                            }]}>
                                Posts
                            </Text>
                            <Text style={[styles.countText,{
                                color: theme.colors.TextColorSecondary,
                            }]}>
                                20
                            </Text>
                        </View>
                        <View style={styles.countContainer}>
                            <Text style={[styles.countText,{
                                color: theme.colors.TextColorSecondary,
                            }]}>
                                Followers
                            </Text>
                            <Text style={[styles.countText,{
                                color: theme.colors.TextColorSecondary,
                            }]}>
                                20
                            </Text>
                        </View>
                        <View style={styles.countContainer}>
                            <Text style={[styles.countText,{
                                color: theme.colors.TextColorSecondary,
                            }]}>
                                Following
                            </Text>
                            <Text style={[styles.countText,{
                                color: theme.colors.TextColorSecondary,
                            }]}>
                                20
                            </Text>
                        </View>
                    </View>
                    <View
                    style={{
                        marginVertical:5
                    }}
                    >
                        <Text style={{
                            color: theme.colors.TextColor,
                            fontSize:18
                        }}>Mahendra Gohil</Text>
                        <Text style={{
                            color: theme.colors.TextColorSecondary
                        }}>{`Long bio to check \nThings are good or not \nPapaki pari haha`}</Text>
                    </View> 
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between",
                        marginVertical:5,
                        borderRadius:5
                    }}>
                        <TouchableOpacity
                        onPress={()=>navigation.navigate("EditProfile",{
                            bio: user.bio,
                            email: user.email,
                            full_name: user.name,
                            user_name: user.user_name,
                            profile_picture: user.image
                        })}
                        style={{
                            padding:5,
                            borderRadius:5,
                            backgroundColor: theme.colors.ColorSecondary,
                        }}
                        >
                            <Text style={{
                                fontSize:18,
                                color: theme.colors.TextColor
                            }}>Edit Profile</Text>

                        </TouchableOpacity>
                    </View>   
                </View>
                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                   // margin:20
                }}>
                    <TouchableOpacity
                    style={{
                        borderBottomColor: theme.colors.TextColorSecondary,
                        borderBottomWidth: 1,
                        width: "30%",
                        padding:10,
                        alignItems:"center"
                    }}
                    >
                        <Feather
                        name= "grid"
                        color={theme.colors.TextColor}
                        size={30}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{
                        borderBottomColor: theme.colors.TextColorSecondary,
                        borderBottomWidth: 1,
                        width: "30%",
                        padding:10,
                        alignItems:"center"
                    }}
                    >
                        <Feather
                        name= "video"
                        color={theme.colors.TextColor}
                        size={30}
                        />
                    </TouchableOpacity>
                    <View/>
                </View>
               

        </SafeAreaView>
    )
}
export default Profile
const styles = StyleSheet.create({
    Container:
    {
        flex:1,
    },
    countContainer:
    {
        alignItems:"center"
    },
    countText:
    {
        fontSize:18,
        marginBottom:10
    },
    infoContainer:
    {
        paddingHorizontal:20,
        paddingVertical:5,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    textUserName:
    {
        fontSize:20,
        fontWeight:"700",
    },
    infoRowContainer:
    {
        flexDirection:"row",
        justifyContent:"space-between"
    },
    imgProfile:
    {
        height:70,
        width:70,
        borderRadius:70
    }


})