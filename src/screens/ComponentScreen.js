import React from 'react'
import {StyleSheet,Text,View, FlatList} from 'react-native';
const ComponentScreen = () => {
    return <View> 
       <Text style={Styles.textstyle}>Getting started with react native!</Text>
       </View>
}
const Styles = StyleSheet.create({
    textstyle:{
        fontSize:40
    },
    SubheadingStyle:{  
        fontSize:30
    },
    listStyle:{
       marginHorizontal:20
    }
})
export default ComponentScreen;

