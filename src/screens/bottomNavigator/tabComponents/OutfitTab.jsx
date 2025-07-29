import { View, Text, Image } from 'react-native'
import React from 'react'

const OutfitTab = () => {
  return (
 <View 
    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , gap: 5 }}
    >
      <Image
      source={require('../../../../assets/images/outfitTab.webp')}
      />
      <Text className="font-Medium text-[16px] text-textPrimary">Fresh looks are waiting for you</Text>
      <Text className="font-Regular text-[14px] text-textPrimary">Hit that plus button to start styling</Text>
    </View>
  )
}

export default OutfitTab