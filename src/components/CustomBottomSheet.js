// import { X, Search, ChevronsUp, MapPin } from "lucide-react-native";
// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   Modal,
//   Dimensions,
//   ScrollView,
// } from "react-native";
// import { responsiveWidth } from "react-native-responsive-dimensions";

// const { width, height } = Dimensions.get("window");

// // Bottom Sheet Modal (Reusable)
// const SelectionBottomSheet = ({
//   visible,
//   onCancel,
//   onApply,
//   selectedItems = [],
//   data = [],
//   title = "Select",
// }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [localSelected, setLocalSelected] = useState(selectedItems);
//   const searchRef = useRef(null);

//   useEffect(() => {
//     if (visible) {
//       setFilteredItems(data);
//       setLocalSelected(selectedItems);
//       setTimeout(() => {
//         searchRef.current?.focus();
//       }, 300);
//     }
//   }, [visible]);

//   const handleSearch = (text) => {
//     setSearchQuery(text);
//     if (text.length > 0) {
//       const filtered = data.filter((item) =>
//         item.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredItems(filtered);
//     } else {
//       setFilteredItems(data);
//     }
//   };

//   const toggleSelection = (item) => {
//     setLocalSelected((prev) =>
//       prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
//     );
//   };

//   const handleReset = () => {
//     setLocalSelected([]);
//     setSearchQuery("");
//     setFilteredItems(data);
//   };

//   const clearSearch = () => {
//     setSearchQuery("");
//     setFilteredItems(data);
//   };
//   //   console.log(data);

//   return (
//     <Modal
//       visible={visible}
//       transparent
//       animationType="slide"
//       onRequestClose={onCancel}
//     >
//       <View className="flex-1 bg-black/50 justify-end">
//         <View
//           className="bg-white rounded-t-3xl"
//           style={{ maxHeight: height * 0.85 }}
//         >
//           <View className="flex-row items-center justify-between p-4 pt-6 border-b border-gray-100">
//             <TouchableOpacity onPress={onCancel} className="p-2">
//               <X size={24} color="#000" />
//             </TouchableOpacity>
//             <Text className="text-xl font-SemiBold text-textPrimary">
//               {title}
//             </Text>
//             <TouchableOpacity onPress={handleReset}>
//               <Text className="text-base font-Medium text-textPrimary">
//                 Reset
//               </Text>
//             </TouchableOpacity>
//           </View>

//           <View className="p-4">
//             <View className="flex-row items-center border border-borderAction rounded-xl px-4 py-1 bg-white">
//               <Search size={20} color="#8b5cf6" />
//               <TextInput
//                 ref={searchRef}
//                 className="flex-1 ml-3 text-base font-Medium text-black"
//                 value={searchQuery}
//                 onChangeText={handleSearch}
//                 placeholder="Search..."
//                 placeholderTextColor="#9ca3af"
//               />
//               {searchQuery.length > 0 && (
//                 <TouchableOpacity onPress={clearSearch} className="p-1">
//                   <X size={16} color="#6b7280" />
//                 </TouchableOpacity>
//               )}
//             </View>
//           </View>

//           <ScrollView
//             contentContainerStyle={{
//               //   flex: 1,
//               paddingHorizontal: responsiveWidth(5),
//             }}
//           >
//             {data.map((item, index) => (
//               <TouchableOpacity
//                 key={item}
//                 className={`flex-row items-center justify-between py-4 `}
//                 onPress={() => toggleSelection(item)}
//               >
//                 <Text className="text-base font-normal text-black flex-1">
//                   {item}
//                 </Text>
//                 {/* <View
//                   className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
//                     localSelected.includes(item)
//                       ? "bg-purple-500 border-purple-500"
//                       : "border-gray-300 bg-white"
//                   }`}
//                 >
//                   {localSelected.includes(item) && (
//                     <View className="w-2 h-2 bg-white rounded-full" />
//                   )}
//                 </View> */}
//               </TouchableOpacity>
//             ))}

//             {/* {filteredItems.length === 0 && (
//               <View className="flex-1 justify-center items-center py-20">
//                 <MapPin size={48} color="#d1d5db" />
//                 <Text className="text-gray-500 text-center mt-4">
//                   No matches found for "{searchQuery}"
//                 </Text>
//               </View>
//             )} */}
//           </ScrollView>

//           <View className="p-4 pt-2">
//             <TouchableOpacity
//               className="bg-surfaceAction rounded-2xl py-4 items-center"
//               onPress={() => onApply(localSelected)}
//               activeOpacity={0.8}
//             >
//               <Text className="text-white text-lg font-SemiBold">
//                 Apply{" "}
//                 {localSelected.length > 0 ? `(${localSelected.length})` : ""}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const CustomBottomSheet = ({
//   title = "Select Items",
//   data = [],
//   initialSelected = [],
//   onChange,
// }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedItems, setSelectedItems] = useState(initialSelected);

//   const handleApply = (items) => {
//     setSelectedItems(items);
//     setShowModal(false);
//     if (onChange) onChange(items);
//   };

//   return (
//     <View className="w-full">
//       <View className="flex-row justify-between">
//         <Text className="text-[16px] font-SemiBold text-textPrimary mb-2">
//           {title}
//         </Text>
//         <Text className="text-[16px] font-SemiBold text-textPrimary mb-2">
//           {title}
//         </Text>
//       </View>
//       <TouchableOpacity
//         className="w-full bg-surfaceActionTertiary rounded-2xl py-3 px-6 flex-row items-center justify-center"
//         onPress={() => setShowModal(true)}
//         activeOpacity={0.8}
//       >
//         <Text className="text-white text-lg font-Medium text-center">
//           {`---Select ${title}---`}
//         </Text>
//         <ChevronsUp size={20} color="white" />
//       </TouchableOpacity>

//       {/* {selectedItems.length > 0 && (
//         <View className="mt-3">
//           <Text className="text-sm font-medium text-gray-600 mb-2">
//             Selected:
//           </Text>
//           <View className="flex-row flex-wrap">
//             {selectedItems.map((item) => (
//               <View
//                 key={item}
//                 className="bg-purple-100 rounded-full px-3 py-1 mr-2 mb-2"
//               >
//                 <Text className="text-purple-700 text-sm">{item}</Text>
//               </View>
//             ))}
//           </View>
//         </View>
//       )} */}

//       <SelectionBottomSheet
//         visible={showModal}
//         onCancel={() => setShowModal(false)}
//         onApply={handleApply}
//         selectedItems={selectedItems}
//         data={data}
//         title={title}
//       />
//     </View>
//   );
// };

// export default CustomBottomSheet;

import { X, Search, ChevronsUp } from "lucide-react-native";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Dimensions,
  ScrollView,
} from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";

const { height } = Dimensions.get("window");

// Bottom Sheet Modal (Reusable)

const SelectionBottomSheet = ({
  visible,
  onCancel,
  onApply,
  selectedItem,
  data = [],
  title = "Select",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [localSelected, setLocalSelected] = useState(selectedItem);
  const searchRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setFilteredItems(data);
      setLocalSelected(selectedItem);
      setTimeout(() => {
        searchRef.current?.focus();
      }, 300);
    }
  }, [visible]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.length > 0) {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(data);
    }
  };

  const toggleSelection = (item) => {
    setLocalSelected((prev) => (prev === item ? null : item));
  };

  const handleReset = () => {
    setLocalSelected(null);
    setSearchQuery("");
    setFilteredItems(data);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredItems(data);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onCancel}
    >
      <View className="flex-1 bg-white">
        {/* Header */}
        <View className="flex-row items-center justify-between p-4 pt-6 border-b border-gray-100">
          <TouchableOpacity onPress={onCancel} className="p-2">
            <X size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-SemiBold text-textPrimary">
            {title}
          </Text>
          <TouchableOpacity onPress={handleReset}>
            <Text className="text-base font-Medium text-textPrimary">
              Reset
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="px-5">
          <View className="flex-row items-center border border-borderAction rounded-xl px-4 py-1 bg-white">
            <Search size={20} color="#8b5cf6" />
            <TextInput
              ref={searchRef}
              className="flex-1 ml-3 text-base font-Medium text-black"
              value={searchQuery}
              onChangeText={handleSearch}
              placeholder="Search..."
              placeholderTextColor="#9ca3af"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={clearSearch} className="p-1">
                <X size={16} color="#6b7280" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* List */}
        <View className="flex-1 mt-2">
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: responsiveWidth(5) }}
          >
            {filteredItems.map((item) => (
              <TouchableOpacity
                key={item}
                className="flex-row items-center justify-between py-4 border-b border-zinc-200"
                onPress={() => toggleSelection(item)}
              >
                <Text className="text-base font-Medium text-textPrimary flex-1">
                  {item}
                </Text>
              </TouchableOpacity>
            ))}

            {filteredItems.length === 0 && (
              <View className="flex-1 justify-center items-center py-20">
                <Text className="text-gray-500 text-center mt-4">
                  No matches found for "{searchQuery}"
                </Text>
              </View>
            )}
          </ScrollView>
        </View>

        {/* Apply Button */}
        <View className="p-4">
          <TouchableOpacity
            className="bg-surfaceAction rounded-2xl py-4 items-center"
            onPress={() => onApply(localSelected ? [localSelected] : [])}
            activeOpacity={0.8}
          >
            <Text className="text-white text-lg font-SemiBold">Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const CustomBottomSheet = ({
  title = "Select Item",
  data = [],
  initialSelected,
  onChange,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initialSelected);
  console.log(selectedItem);

  const handleApply = (items) => {
    setSelectedItem(items[0]);
    setShowModal(false);
    if (onChange) onChange(items);
  };

  return (
    <View className="w-full">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-[16px] font-SemiBold text-textPrimary mb-2">
          {title}
        </Text>
        <Text className="text-[16px] font-Medium text-textPrimary mb-2 border-b border-zinc-300">
          {selectedItem || "Not Selected"}
        </Text>
      </View>
      <TouchableOpacity
        className="w-full bg-surfaceActionTertiary rounded-2xl py-3 px-6 flex-row items-center justify-center"
        onPress={() => setShowModal(true)}
        activeOpacity={0.8}
      >
        <Text className="text-white text-lg font-Medium text-center">
          {`---Select ${title}---`}
        </Text>
        <ChevronsUp size={20} color="white" />
      </TouchableOpacity>

      <SelectionBottomSheet
        visible={showModal}
        onCancel={() => setShowModal(false)}
        onApply={handleApply}
        selectedItem={selectedItem}
        data={data}
        title={title}
      />
    </View>
  );
};

export default CustomBottomSheet;
