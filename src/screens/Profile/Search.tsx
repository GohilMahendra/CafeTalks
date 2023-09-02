import React, { useContext, useEffect, useRef, useState } from 'react'
import { View,Dimensions,Image , Text ,TextInput,FlatList, TouchableOpacity, Keyboard, KeyboardAvoidingView} from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import ChatItem from '../../components/chat/ChatItem'
import { useFocusEffect } from '@react-navigation/native'
const Search = () =>
{
    const [result,setResult] = useState([])
    const [searchText,setSearchText] = useState<string>("")
    const { theme } = useContext(ThemeContext)
    const inputRef = useRef<TextInput | null>(null)
    const { height , width} = Dimensions.get("window")
    let debounceTimout:any = null
    const renderSearch = ({item,index}:{item:any,index:number}) =>
    {
        console.log(item.thumbnail)
        return(
            <View style={{
                backgroundColor:theme.colors.ColorSecondary,
                height:150,
                borderRadius:10,
                width:"28%",
                margin:10
            }}>
                <Image
                source={{uri:item.thumbnail}}
                resizeMode="cover"
                style={{
                    flex:1
                }}
                />



            </View>
        )

    }

  
    useEffect(()=>{
      if(!searchText)
      return

      clearTimeout(debounceTimout)
      debounceTimout = setTimeout(()=>{
        console.log(searchText)
      },1000) 

    },[searchText])
    const renderResult = ({item,index}:{item:any,index:number}) =>
    {
        return(
            <TouchableOpacity
            style={{
                margin:5,
                padding:10,
                borderRadius:10,
                alignSelf:"center",
                width:width - 20,
                borderBottomColor: theme.colors.TextColor,
                borderBottomWidth:0.5
            }}
            >
                <Text style={{
                    color:theme.colors.TextColor,
                    fontSize:15
                }}>Search resilt </Text>
            </TouchableOpacity>
        )

    }

    useFocusEffect(()=>{
        inputRef.current?.focus()
    })

    return(   
        <View style={{
            flex:1,
            backgroundColor: theme.colors.ColorBackground
        }}>
            <TextInput
            value={searchText}
            onChangeText={(text:string)=>setSearchText(text)}
            ref={ref=>inputRef.current = ref}
            placeholder='Search ...'
            placeholderTextColor={theme.colors.TextColorSecondary}
            style={{
                padding:10,
                margin:20,
                fontSize:15,
                backgroundColor:theme.colors.ColorSecondary,
                borderRadius:10,
                color: theme.colors.TextColor
            }}
            />

            <FlatList
            style={{
                flex:1,
                borderRadius:10,
                alignSelf:"center",
                backgroundColor: theme.colors.ColorSecondary
            }}
           
            data={result}
            renderItem={renderResult}
            keyExtractor={(item)=>item.id}

            
            />
          
        </View>
    )
}
export default Search