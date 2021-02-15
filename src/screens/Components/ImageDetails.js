import React from 'react'
import {Text,View,StyleSheet,Image} from "react-native"

const ImageDetails = ({title,imagename,score}) => {
    // let path=`"../../../assets/${imagename}.jpg"`;
    // console.log(path)
    return (
        <View>
        <Image source={imagename}/>
       <Text>This is an image of a {title}</Text>
       <Text>Score : {score}</Text>
       </View>
    )
}

export default ImageDetails
