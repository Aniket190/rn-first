import React,{useState} from "react";
import {Text,View,StyleSheet,Button} from "react-native"

const CounterScreen =  () =>{

   const [Counter,setCounter]=useState(0);


    return (
        <View>
           <Button 
             onPress={()=>{setCounter(Counter+1)}}
             title="Increase"
             />
           <Button 
             onPress={()=>{setCounter(Counter-1)}}
             title="Decrease"
             />
             <Text>Current Count: {Counter}</Text>
        </View>     
           )
} 

export default CounterScreen;
