import React from 'react'
import { useWindowDimensions, FlatList ,Image} from 'react-native'
import { View,Text } from 'react-native'

type ImageSliderProps ={
    images: string[],
}
const ImageSlider = (props:ImageSliderProps) =>
{
    const {height,width} = useWindowDimensions()
    const { images } = props
    // const images = [
    //     "https://images.pexels.com/photos/6590699/pexels-photo-6590699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     "https://images.pexels.com/photos/14934612/pexels-photo-14934612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     "https://images.pexels.com/photos/4394104/pexels-photo-4394104.jpeg?auto=compress&cs=tinysrgb&w=800"
    // ]
    const snapToInterval = width 
    const renderImage = ({item,index}:{item:string,index:number}) =>
    {
        return(
            <Image
            source={{uri:item}}
            style={{
                borderRadius:15,
                height: height*70/100,
                width: width
            }}
            
            />
        )

    }
    return(
        <View style={{
            height:  height * 70/100,
            width:  width
        }}>
        <FlatList
        horizontal
        style={{
            flex:1
        }}
        data={images}
        renderItem={({item,index})=>renderImage({item,index})}
        keyExtractor={(item)=>item}
        snapToInterval={snapToInterval}        
        />
        </View>
    )

}
export default ImageSlider