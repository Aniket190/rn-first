import React from 'react'
import {StyleSheet,Text,View} from 'react-native';
const ComponentScreen = () => {
    let name='Aniket';

    return <View> 
       <Text style={Styles.textstyle}>Getting started with react native!</Text>

       <Text style={Styles.subheadingStyle}>My name is {name}</Text>
       </View>
}
const Styles = StyleSheet.create({
    textstyle:{
        fontSize:40
    },
    SubheadingStyle:{
        fontSize:30
    }
})
export default ComponentScreen;

262,13