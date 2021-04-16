import React,{useState,useReducer} from "react";
import {Text,View,StyleSheet,Button} from "react-native"

const reducer = (state,action) =>{
  switch(action.type)
  {
    case 'INCREMENT':
        return {...state,Counter: state.Counter+action.payload}
    case 'DECREMENT':
      return {...state,Counter: state.Counter+action.payload}
     default:
        return state;

  }
}

const CounterScreen =  () =>{

   const [state,dispatch]=useReducer(reducer,{Counter:0});
   const {Counter}=state;

    return (
        <View>
           <Button 
             onPress={()=>dispatch({type:'INCREMENT',payload:1})}
             title="Increase"
             />
           <Button 
             onPress={()=>dispatch({type:'DECREMENT',payload:-1})}
             title="Decrease"
             />
             <Text>Current Count: {Counter}</Text>
        </View>     
           )
} 

export default CounterScreen;
