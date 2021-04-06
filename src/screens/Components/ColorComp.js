import React from 'react'
import {Text,View,StyleSheet,Button} from 'react-native'

const ColorComp = ({color,onIncrease,onDecrease}) => {
      
  return (
      <View>
          <Text>{color}</Text>
          <Button
            title={`Increase ${color}`}
            onPress={()=>onIncrease()}
          />
          <Button
            title={`Decrease ${color}`}
            onPress={()=>onDecrease()}
          />

      </View>
  )


}

export default ColorComp;