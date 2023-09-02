import React from 'react'
import { View , Text, TouchableOpacity, Image } from 'react-native'

export type ImageBoxProps = 
{
    thumbnail:string,
    onPress: ()=> void,
}

const ImageBox = (props: ImageBoxProps) =>
{
    const { onPress,thumbnail} = props
    return(
        <TouchableOpacity
        onPress={()=>onPress()}
        >
            <Image 
            source={{uri:thumbnail }}
            style={{
                flex:1,
                overflow:"hidden"
            }}
            ></Image>
        </TouchableOpacity>
    )

}
export default ImageBox