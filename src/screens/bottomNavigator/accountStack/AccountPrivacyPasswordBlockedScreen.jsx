// import { useNavigation } from "@react-navigation/native";
// import { ArrowLeft } from "lucide-react-native";
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Pressable,
//   StatusBar,
//   Image,
//   FlatList,
//   Alert,
//   Pressable,
// } from "react-native";
// import { responsiveWidth } from "react-native-responsive-dimensions";

// const AccountPrivacyPasswordBlockedScreen = () => {
//   const navigation = useNavigation();
//   const [blockedUsers, setBlockedUsers] = useState([
//     {
//       id: 1,
//       name: "Annette Black",
//       avatar:
//         "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
//     },
//     // Add more blocked users here if needed
//   ]);

//   const handleUnblock = (user) => {
//     Alert.alert(
//       "Unblock User",
//       `Are you sure you want to unblock ${user.name}?`,
//       [
//         {
//           text: "Cancel",
//           style: "cancel",
//         },
//         {
//           text: "Unblock",
//           style: "destructive",
//           onPress: () => {
//             setBlockedUsers((prev) => prev.filter((u) => u.id !== user.id));
//           },
//         },
//       ]
//     );
//   };

//   const renderBlockedUser = ({ item }) => (
//     <View className="flex-row items-center justify-between px-4 py-4 bg-white">
//       <View className="flex-row items-center flex-1">
//         {/* Profile Avatar */}
//         <View className="w-12 h-12 rounded-full overflow-hidden mr-4">
//           <Image
//             source={{ uri: item.avatar }}
//             className="w-full h-full"
//             resizeMode="cover"
//           />
//         </View>

//         {/* User Name */}
//         <Text className="text-base font-medium text-black flex-1">
//           {item.name}
//         </Text>
//       </View>

//       {/* Unblock Button */}
//       <Pressable
//         className="bg-surfaceAction px-4 py-2 rounded-full"
//         onPress={() => handleUnblock(item)}
//         activeOpacity={0.8}
//       >
//         <Text className="text-white text-sm font-medium">Unblock</Text>
//       </Pressable>
//     </View>
//   );

//   const EmptyState = () => (
//     <View className="flex-1 justify-center items-center px-8 pt-20">
//       <View className="w-20 h-20 bg-gray-100 rounded-full items-center justify-center mb-4">
//         <Text className="text-2xl">🚫</Text>
//       </View>
//       <Text className="text-lg font-medium text-gray-800 text-center mb-2">
//         No Blocked Users
//       </Text>
//       <Text className="text-gray-500 text-center">
//         Users you block will appear here
//       </Text>
//     </View>
//   );
//   const handleGoBack = () => {
//     navigation.goBack();
//   };
//   return (
//     <View className="flex-1 bg-white">
//       {/* <StatusBar barStyle="dark-content" backgroundColor="white" /> */}

//       {/* Header */}
//       <View className="flex-row items-center  p-5 mt-5">
//         <Pressable
//           onPress={handleGoBack}
//           className="w-10 h-10 items-center justify-center -ml-2"
//           activeOpacity={0.7}
//         >
//           <ArrowLeft size={20} strokeWidth={2} />
//         </Pressable>
//         <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
//           Blocked
//         </Text>
//         <View
//           style={{
//             width: responsiveWidth(10),
//           }}
//         />
//       </View>

//       {/* Content */}
//       {blockedUsers.length > 0 ? (
//         <View className="flex-1">
//           {/* Section Header */}
         
//             <Text className="text-lg font-SemiBold text-textPrimary px-5">
//               Blocked Profile
//             </Text>
          

//           {/* Blocked Users List */}
//           <FlatList
//             data={blockedUsers}
//             renderItem={renderBlockedUser}
//             keyExtractor={(item) => item.id.toString()}
//             showsVerticalScrollIndicator={false}
//             ItemSeparatorComponent={() => (
//               <View className="h-px bg-gray-100 ml-16" />
//             )}
//           />
//         </View>
//       ) : (
//         <EmptyState />
//       )}
//     </View>
//   );
// };

// export default AccountPrivacyPasswordBlockedScreen;

import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StatusBar,
  Image,
  FlatList,
  Alert,

  Modal,
} from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";

// Custom Unblock Modal Component
const UnblockModal = ({ visible, user, onCancel, onConfirm }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <Pressable 
        className="flex-1 bg-black/50 justify-center items-center px-8"
        activeOpacity={1}
        onPress={onCancel}
      >
        <Pressable 
          className="bg-white rounded-3xl p-6 w-full max-w-sm"
          activeOpacity={1}
          onPress={() => {}} // Prevent closing when touching modal content
        >
          {/* User Avatar */}
          <View className="items-center mb-6">
            <View className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100">
              <Image
                source={{ uri: user?.avatar }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          </View>

          {/* Modal Title */}
          <Text className="text-3xl font-Bold text-black text-center mb-4">
            Unblock {user?.name}?
          </Text>

          {/* Modal Description */}
          <Text className="text-base font-Medium text-gray-600 text-center mb-8 leading-6">
            They will be able to find your profile and can follow your profile.
          </Text>

          {/* Action Buttons */}
          <View className="gap-3">
            {/* Unblock Button */}
            <Pressable
              className="bg-green-500 rounded-2xl py-4 items-center"
              onPress={onConfirm}
              activeOpacity={0.8}
            >
              <Text className="text-white text-lg font-SemiBold">
                Yes, Unblock
              </Text>
            </Pressable>

            {/* Cancel Button */}
            <Pressable
              className="bg-gray-200 rounded-2xl py-4 items-center"
              onPress={onCancel}
              activeOpacity={0.8}
            >
              <Text className="text-black text-lg font-SemiBold">
                Cancel
              </Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const AccountPrivacyPasswordBlockedScreen = () => {
  const navigation = useNavigation();
  const [blockedUsers, setBlockedUsers] = useState([
    // {
    //   id: 1,
    //   name: "Annette Black",
    //   avatar:
    //     "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    // },
    {
      id: 2,
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    // Add more blocked users here if needed
  ]);

  const [showUnblockModal, setShowUnblockModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUnblockPress = (user) => {
    setSelectedUser(user);
    setShowUnblockModal(true);
  };

  const handleUnblockConfirm = () => {
    if (selectedUser) {
      setBlockedUsers((prev) => prev.filter((u) => u.id !== selectedUser.id));
    }
    setShowUnblockModal(false);
    setSelectedUser(null);
  };

  const handleUnblockCancel = () => {
    setShowUnblockModal(false);
    setSelectedUser(null);
  };

  const renderBlockedUser = ({ item }) => (
    <View className="flex-row items-center justify-between px-4 py-4 bg-white">
      <View className="flex-row items-center flex-1">
        {/* Profile Avatar */}
        <View className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            source={{ uri: item.avatar }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* User Name */}
        <Text className="text-base font-medium text-black flex-1">
          {item.name}
        </Text>
      </View>

      {/* Unblock Button */}
      <Pressable
        className="bg-surfaceAction px-4 py-2 rounded-full"
        onPress={() => handleUnblockPress(item)}
        activeOpacity={0.8}
      >
        <Text className="text-white text-base font-Medium">Unblock</Text>
      </Pressable>
    </View>
  );

  const EmptyState = () => (
    <View className="flex-1 justify-center items-center px-8 pt-20">
      <View className="w-20 h-20 bg-gray-100 rounded-full items-center justify-center mb-4">
        <Text className="text-2xl">🚫</Text>
      </View>
      <Text className="text-lg font-medium text-gray-800 text-center mb-2">
        No Blocked Users
      </Text>
      <Text className="text-gray-500 text-center">
        Users you block will appear here
      </Text>
    </View>
  );

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center p-5 mt-5">
        <Pressable
          onPress={handleGoBack}
          className="w-10 h-10 items-center justify-center -ml-2"
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          Blocked
        </Text>
        <View
          style={{
            width: responsiveWidth(10),
          }}
        />
      </View>

      {/* Content */}
      {blockedUsers.length > 0 ? (
        <View className="flex-1">
          {/* Section Header */}
          <Text className="text-lg font-SemiBold text-textPrimary px-5">
            Blocked Profile
          </Text>

          {/* Blocked Users List */}
          <FlatList
            data={blockedUsers}
            renderItem={renderBlockedUser}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View className="h-px bg-gray-100 ml-16" />
            )}
          />
        </View>
      ) : (
        <EmptyState />
      )}

      {/* Custom Unblock Modal */}
      <UnblockModal
        visible={showUnblockModal}
        user={selectedUser}
        onCancel={handleUnblockCancel}
        onConfirm={handleUnblockConfirm}
      />
    </View>
  );
};

export default AccountPrivacyPasswordBlockedScreen;