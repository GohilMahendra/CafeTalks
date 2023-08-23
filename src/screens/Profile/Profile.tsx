import React, { useContext } from 'react'
import { View , Text, SafeAreaView } from 'react-native'
import { ThemeContext } from '../../globals/ThemeContext'
import LinearGradient from 'react-native-linear-gradient'
import { Image } from 'react-native-elements'
import { DummyImage } from '../../globals/data'
import { StyleSheet } from 'react-native'

const Profile = () =>
{
    const { theme } = useContext(ThemeContext)
    return(
        <SafeAreaView style={{
            flex:1,
            backgroundColor: theme.colors.ColorBackground
        }}>
            
                <View style={{
                    paddingHorizontal:20,
                    paddingVertical:5,
                    flexDirection:"row",
                }}>
                    <Text style={{
                        fontSize:20,
                        fontWeight:"700",
                        color: theme.colors.TextColor
                    }}>{"USERNAME_NAE"}</Text>
                </View>
                <View style={{
                    height:200,
                    padding:20
                }}>
                
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between"
                    }}>
                        <Image
                        source={DummyImage}
                        style={{
                            height:70,
                            width:70,
                            borderRadius:70
                        }}
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

                </View>

        </SafeAreaView>
    )
}
export default Profile
const styles = StyleSheet.create({
    Container:{

    },
    countContainer:
    {
        alignItems:"center"
    },
    countText:
    {
        fontSize:18,
        marginBottom:10
    }

})