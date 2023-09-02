import React, { useContext, useEffect, useState } from 'react'
import { View , Text, SafeAreaView, FlatList } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import LinearGradient from 'react-native-linear-gradient'
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
import { ProfileTabParams } from '../../navigation/ProfileTabNavigation'

export type User = 
{
    name: string,
    user_name: string,
    image: string | null,
    bio: string
}
const Profile = () =>
{
    const { theme } = useContext(ThemeContext)
    const [selectedMedia , setSelectedMedia] = useState<boolean>(true)
    const [media,setMedia] = useState([])
    const navigation = useNavigation<NativeStackNavigationProp<ProfileTabParams>>()
    const [user, setUser] = useState<User>({
        bio:"",
        image: null,
        name:"",
        user_name:""
    })

    const getUserDetails = async() =>
    {
        const currentUser = await Auth.currentAuthenticatedUser({
            bypassCache: false
        })
        console.log(JSON.stringify(currentUser))
        const user_id = currentUser.attributes.sub
        
        const user: GraphQLResult<any> = (await API.graphql(graphqlOperation(getUser,{id:user_id})))
      
        setUser({
            bio: user.data?.getUser?.bio,
            image: user.data.getUser.profile_picture,
            name: user.data.getUser.name,
            user_name:  user.data.getUser.user_name,
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
                        <View>
                        <Image
                        source={(user.image)?{uri: user.image}:DummyImage}
                        style={styles.imgProfile}
                        />
                        <Text
                        style={{
                            color: theme.colors.TextColor
                        }}
                        >{user.bio}</Text>
                        </View>

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
                </View>
                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    margin:20
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