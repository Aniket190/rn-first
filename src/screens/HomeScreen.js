import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>This is my FIrst project</Text>
      <Button 
      onPress={()=>{navigation.navigate('Component')}}
      title={"Introduction"} />
      <Button 
        onPress={()=>{navigation.navigate('List')}}
      title={"ListScreen!"} />
      <Button 
        onPress={()=>{navigation.navigate('Image')}}
      title={"Image Screen!"} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
export default HomeScreen;
