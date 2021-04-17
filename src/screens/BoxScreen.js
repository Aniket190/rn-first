import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const BoxScreen= () =>{
    return(
        <View style={styles.viewStyle}>
                <View style={styles.box1}></View>
                <View style={styles.box2}></View>
                <View style={styles.box3}></View>
   
        </View>
    )
}
const styles=StyleSheet.create({
   viewStyle:{
      flexDirection:'row',
      borderWidth:10,
      borderColor:'red',
      height:220,
      justifyContent:'center'
   },
   box1:{
    borderWidth:2,
    borderColor:'black',
    height:100,
    width:100,
    backgroundColor:'black'
   },
   box2:{
    borderWidth:2,
    borderColor:'black',
    height:100,
    width:100,
    alignSelf:'flex-end',
    backgroundColor:'black'
   },
   box3:{
    borderWidth:2,
    borderColor:'black',
    height:100,
    width:100,
    backgroundColor:'black'
   } 
});

export default BoxScreen;