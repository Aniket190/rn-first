import React,{useState} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import ColorComp from './Components/ColorComp'

const COUNTER_VAR=50;

const SquareScreen=()=>{

   const [red,setRed]=useState(0);
   const [green,setGreen]=useState(0);
   const [blue,setBlue]=useState(0);

   //Helper Funtion
    const setColor = (color,change) =>{
       switch(color)
        {
            case 'red':
                red+change>255 || red+change<0?null:setRed(red+change);
                return;
            case 'green':
                green+change>255 || green+change<0?null:setGreen(green+change);
                return;
            case 'blue':
                blue+change>255 || blue+change<0?null:setBlue(blue+change);
                return;
            default:
                return;
        }
    }
    

   return (
       <View>
           <ColorComp onIncrease={()=>setColor('red',COUNTER_VAR)} onDecrease={()=>setColor('red',-1*COUNTER_VAR)} color="Red"/>
           <ColorComp onIncrease={()=>setColor('green',COUNTER_VAR)} onDecrease={()=>setColor('green',-1*COUNTER_VAR)} color="green"/>
           <ColorComp onIncrease={()=>setColor('blue',COUNTER_VAR)} onDecrease={()=>setColor('blue',-1*COUNTER_VAR)} color="blue"/>
 
           
           <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}/>
           
       </View>
   )
}

const styles=StyleSheet.create({

})

export default SquareScreen;