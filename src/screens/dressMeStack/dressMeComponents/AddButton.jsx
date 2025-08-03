import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Plus } from 'lucide-react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const AddButton = ({title, path}) => {
    const navigation = useNavigation();
  return (
    <Pressable
        onPress={() => navigation.navigate(path)}
        className="gap-2 justify-center items-center"
      >
        <View
          className="bg-surfaceAction rounded-full "
          style={{
            padding: responsiveWidth(4),
          }}    
        >
          <Plus color="white" />
        </View>
        <Text className=" font-SemiBold text-textPrimary text-lg">
          {title}
        </Text>
      </Pressable>
  )
}

export default AddButton