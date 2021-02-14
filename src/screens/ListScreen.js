import React from 'react'
import {StyleSheet,Text,View, FlatList} from 'react-native';
const ListScreen = () => {
    let name='Aniket';
    let friends = [
        {name:'#1'},
        {name:'#2'},
        {name:'#3'},
        {name:'#4'},
        {name:'#5'},
        {name:'#6'},
        {name:'#7'},
        {name:'#8'},
        {name:'#9'},
    ]

    return <View> 
   
       <Text style={Styles.subheadingStyle}>My name is {name}</Text>
        
       <FlatList 
         
         

         data={friends}
        
         renderItem={(element)=>{
            return <Text style={Styles.listStyle}>{element.item.name}</Text>
         }            
         }
        
       /> 
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
       marginVertical:20
    }
})
export default ListScreen;

