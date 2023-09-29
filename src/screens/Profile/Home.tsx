import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { View,Modal,TouchableOpacity, Text, FlatList,TouchableWithoutFeedback,Image, useWindowDimensions } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import VideoPost from '../../components/Feed/VideoPost'
import ImagePost from '../../components/Feed/ImagePost'
import VideoPlayer from '../../components/Feed/VideoPlayer'
import { API, Auth, Storage, graphqlOperation } from 'aws-amplify'
import { SafeAreaView } from 'react-native'
import { listPosts } from '../../graphql/queries'


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
    const [Stories,SetStories] = useState<string[]>([
        "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974722846/jujutsu-kaisen-vol-11-9781974722846_hr.jpg",
        "https://www.animenewsnetwork.com/hotlink/images/encyc/A25346-1023635631.1690326071.jpg",
        "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974740819/jujutsu-kaisen-the-official-anime-guide-season-1-9781974740819_hr.jpg",
        "https://e0.pxfuel.com/wallpapers/1007/142/desktop-wallpaper-kakashi-hatake.jpg",

    ])
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
        setFeedPosts([{
            comments:0,
            id:"string",
            images:["https://e0.pxfuel.com/wallpapers/1007/142/desktop-wallpaper-kakashi-hatake.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWhKpqFySrL91rUKf5cdQvWjSbSIRQi736A&usqp=CAU"],
            likes:0,
            name:"go jo sotaru",
            profilePicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWhKpqFySrL91rUKf5cdQvWjSbSIRQi736A&usqp=CAU",
            tags:["gojo"],
            userName:"gojo_jujutsu",
            video:null
        }])
    
        //getPosts()
    },[])
    return(
        <SafeAreaView style={{
            flex:1,
            backgroundColor:theme.colors.ColorBackground
        }}>
            <View style={{
                flexDirection:"row",
                padding:20,
            }}>
                {
                    Stories.map(
                        (image:string)=>(
                            <TouchableOpacity
                            key={image}
                            >
                                <Image
                                source={{
                                    uri:image
                                }}
                                
                                style={{
                                    height:70,
                                    width:70,
                                    marginRight:10,
                                    borderRadius:70,
                                    borderWidth:1,
                                    borderColor: theme.colors.ColorPrimary
                                }}
                                />
                        </TouchableOpacity>
                        )
                    )
                }

            </View>
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