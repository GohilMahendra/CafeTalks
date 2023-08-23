import React, { useCallback, useContext, useRef, useState } from 'react'
import { View,Modal, Text, FlatList,TouchableWithoutFeedback, useWindowDimensions } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import VideoPost from '../../components/Feed/VideoPost'
import ImagePost from '../../components/Feed/ImagePost'
import VideoPlayer from '../../components/Feed/VideoPlayer'

export type FeedType = 
{
    id:number,
    url:string,
    type:"image" | "video"
}
const Home = () =>
{
    const [feedPosts,setFeedPosts] = useState<FeedType[]>([
        {
            id:1,
            url:"",
            type:"image"
        },
    ])
    const [visibleIndex, setVisibleIndex] = useState<number | null>(null)
    const {height,width} = useWindowDimensions()
    const [showComments,setShowComments] = useState(false)

    const {theme} = useContext(ThemeContext)
    const cellRefs = useRef<any>({})
    const renderFeedComponent = ({item,index}:{item:FeedType,index:number})=>{
        return(
            <View style={{
           
            }}>
            <VideoPost visible={visibleIndex == index}/>
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
    
    return(
        <View style={{
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
            // onViewableItemsChanged={handleViewableItemsChanged}
            // viewabilityConfig={viewConfigRef.current}
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

          
        </View>
    )
}
export default Home