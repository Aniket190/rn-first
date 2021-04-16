import React,{useState, useReducer} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import ColorComp from './Components/ColorComp'

const COUNTER_VAR=50;

const reducer = (state,action)=>{
    switch(action.colorToChange){
        case 'red':
            return (state.red+action.change > 255 || state.red + action.amount < 0)? state : {...state,red: state.red + action.amount };
        case 'green':
             return (state.green+action.change > 255 || state.green + action.amount < 0)? state : {...state, green:state.green + action.amount };
        case 'blue':
             return (state.blue+action.change > 255 || state.blue + action.amount < 0)? state : {...state, blue: state.blue + action.amount };
         default:
          return state;
    }
};
const SquareScreen=()=>{


   const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});

   const {red,blue,green}=state;

//    //Helper Funtion
//     const setColor = (color,change) =>{
//        switch(color)
//         {
//             case 'red':
//                 red+change>255 || red+change<0?null:setRed(red+change);
//                 return;
//             case 'green':
//                 green+change>255 || green+change<0?null:setGreen(green+change);
//                 return;
//             case 'blue':
//                 blue+change>255 || blue+change<0?null:setBlue(blue+change);
//                 return;
//             default:
//                 return;
//         }
//     }
    
   return (
       <View>
           <ColorComp 
              onIncrease={()=>dispatch({colorToChange:'red', amount : COUNTER_VAR})} 
              onDecrease={()=>dispatch({colorToChange:'red', amount : -1*COUNTER_VAR})} 
              color="Red"/>
           <ColorComp 
              onIncrease={()=>dispatch({colorToChange:'green', amount : COUNTER_VAR})} 
              onDecrease={()=>dispatch({colorToChange:'green', amount : -1*COUNTER_VAR})} 
              color="green"/>
           <ColorComp 
              onIncrease={()=>dispatch({colorToChange:'blue', amount : COUNTER_VAR})} 
              onDecrease={()=>dispatch({colorToChange:'blue', amount : -1* COUNTER_VAR})} 
              color="blue"/>
 
           
           <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}/>
           
       </View>
   )
}

const styles=StyleSheet.create({

})

export default SquareScreen;