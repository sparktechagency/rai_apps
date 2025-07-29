import { View, Text, Image } from 'react-native'
import React from 'react'

const ItemTab = () => {
  return (
    <View 
    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , gap: 5 }}
    >
      <Image
      source={require('../../../../assets/images/itemTab.webp')}
      />
      <Text className="font-Medium text-[16px] text-textPrimary">Hit the plus button to start adding to your wardrobe</Text>
      <Text className="font-Regular text-[14px] text-textPrimary">No items in your wardrobe yet so let’s go</Text>
    </View>
  )
}

export default ItemTab