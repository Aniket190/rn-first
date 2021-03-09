import React from 'react';
import {View,Text,StyleSheet,Button} from "react-native";

const ColourScreen = () => {
    return (
      <View>  
          <Button 
           title="Add a New Color"
          />
          <View style={{width:100,height:100,backgroundColor: randColor()}}/>
          </View>
    )
}

const styles=StyleSheet.create({});

const randColor=()=>{
   const red=Math.floor(Math.random()*255);
   const green=Math.floor(Math.random()*255);
   const blue=Math.floor(Math.random()*255);
   return `rgb(${red},${green},${blue})`
}

export default ColourScreen;
