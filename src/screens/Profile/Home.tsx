import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { View,Modal, Text, FlatList,TouchableWithoutFeedback, useWindowDimensions } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import VideoPost from '../../components/Feed/VideoPost'
import ImagePost from '../../components/Feed/ImagePost'
import VideoPlayer from '../../components/Feed/VideoPlayer'
import { API, Auth, Storage, graphqlOperation } from 'aws-amplify'
import { SafeAreaView } from 'react-native'


export type FeedType = 
{
    id: string,
    comments: number,
    likes: number,
    tags: string[],
    images: string[],
    video: string | null,
    userName: string,
    name: string,
    profilePicture: string | null,
}
const Home = () =>
{
    const [feedPosts,setFeedPosts] = useState<FeedType[]>([])
    const [visibleIndex, setVisibleIndex] = useState<number | null>(null)
    const {height,width} = useWindowDimensions()
    const [showComments,setShowComments] = useState(false)

    const {theme} = useContext(ThemeContext)
    const cellRefs = useRef<any>({})
    const renderFeedComponent = ({item,index}:{item:FeedType,index:number})=>{
        return(
            <View style={{
           
            }}>
            <ImagePost
            comments={item.comments}
            id={item.id}
            images={item.images}
            likes={item.likes}
            name={item.name}
            profilePicture={item.profilePicture}
            tags={item.tags}
            userName={item.userName}
            key={item.id}
            />
            </View>
        )
    }
    const handleViewableItemsChanged =     useCallback(
        ({ viewableItems }:{viewableItems:any}) => {
            if (viewableItems.length > 0) {
              setVisibleIndex(viewableItems[0].index);
            } else {
              setVisibleIndex(null);
            }
          }
     ,
      [],
    )
    
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 100 })
    
    const getPosts = async() =>
    {
        const current_user  = await Auth.currentAuthenticatedUser({
            bypassCache: true
           })
        const UID = current_user.attributes.sub

        const response:any= await API.graphql(
            graphqlOperation(listPosts)
          );
        let Feed: FeedType[] = []
          if(response.data?.listPosts?.items)
          {

            console.log(response.data?.listPosts?.items)
            try
            {
             response.data.listPosts.items.forEach(async(data:any)=>{
                const profile = await Storage.get(data?.User?.profile_picture)
                Feed.push({
                    comments: data.comments || 0,
                    id: data.id,
                    images: data.images,
                    likes: data.likes,
                    name: data.User.name,
                    profilePicture:profile,
                    tags:data.tags,
                    userName: data.User?.user_name,
                    type: data.type,
                    video: data.short
                })
             })
            }
            catch(err)
            {
                console.log(err)
            }
          }
        
          setFeedPosts(Feed)
          console.log(Feed)
    }
       

    useEffect(()=>{
        getPosts()
    },[])
    return(
        <SafeAreaView style={{
            flex:1,
            backgroundColor:theme.colors.ColorBackground
        }}>
            <FlatList
            
            style={{
                flex:1,
            }}
            data={feedPosts}
            renderItem={({item,index})=>renderFeedComponent({item,index})}
            keyExtractor={(item)=>(item.id.toString())}
            onViewableItemsChanged={handleViewableItemsChanged}
            viewabilityConfig={viewConfigRef.current}
            snapToInterval={height-200}
            />
            
            <Modal
            animationType='slide'
            visible = {showComments}
            
            >
                <View 
                style={{
                    flex:1,
                    backgroundColor:"rgba(0,0,0,0.7)",
                    justifyContent:"flex-end"
                }}>

                        <View 
                        style={{
                        borderTopLeftRadius:20,
                        borderTopRightRadius:20,
                        backgroundColor:theme.colors.ColorSecondary,
                        height:"70%",
                        elevation:20,
                        width:width

                        }}
                        >
                            <View
                            style={{
                                height:5,
                                width:100,
                                backgroundColor:theme.colors.PlaceHolderColor,
                                borderRadius:5,
                                alignSelf:"center",
                                margin:20
                            }}
                            />
                        </View>
                </View>

            </Modal>

          
        </SafeAreaView>
    )
}
export default Home