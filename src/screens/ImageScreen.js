import React from 'react'
import {Text,View} from 'react-native'
import ImageDetails from './Components/ImageDetails'

const ImageScreen = () => {
    return <View>
            <ImageDetails title={"forest"} imagename={require("../../assets/forest.jpg")} score={9}/>
            <ImageDetails title={"beach"} imagename={require("../../assets/beach.jpg")} score={10}/>
            <ImageDetails title={"mountains"} imagename={require("../../assets/mountain.jpg")} score={8.5}/>
        </View>
    
}

export default ImageScreen
