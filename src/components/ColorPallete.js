import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const ColorPalette = () => {
  const colorData = [
    [
      { hex: '#3B82F6', name: 'Blue-500' },
      { hex: '#10B981', name: 'Emerald-500' },
      { hex: '#F59E0B', name: 'Amber-500' },
      { hex: '#EF4444', name: 'Red-500' },
    ],
    [
      { hex: '#8B5CF6', name: 'Violet-500' },
      { hex: '#4F46E5', name: 'Indigo-600' },
      { hex: '#06B6D4', name: 'Cyan-500' },
    //   { hex: '#F97316', name: 'Orange-500' },
    ],
    [
      { hex: '#059669', name: 'Green-600' },
      { hex: '#EC4899', name: 'Pink-500' },
    //   { hex: '#84CC16', name: 'Lime-500' },
    //   { hex: '#F97316', name: 'Orange-500' },
    ],
    [
      { hex: '#DC2626', name: 'Red-600' },
      { hex: '#6366F1', name: 'Indigo-500' },
      { hex: '#8B5CF6', name: 'Violet-500' },
      { hex: '#14B8A6', name: 'Teal-500' },
    ],
    [
      { hex: '#F59E0B', name: 'Amber-500' },
      { hex: '#0EA5E9', name: 'Sky-500' },
    //   { hex: '#A855F7', name: 'Purple-500' },
    //   { hex: '#22C55E', name: 'Green-500' },
    ],
    [
      { hex: '#EF4444', name: 'Red-500' },
      { hex: '#3B82F6', name: 'Blue-500' },
    ],
  ];

  const renderColorItem = (item, key) => (
    <View
      key={key}
      className="flex-row items-center  px-4 py-3 rounded-full border border-gray-200 min-w-[100px]"
    >
      <View
        className="w-5 h-5 rounded-full mr-2"
        style={{ backgroundColor: item.hex }}
      />
      <Text className="text-md text-textPrimary font-Medium">{item.name}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
      <Text className="text-lg font-SemiBold text-textPrimary mb-5">Colors</Text>
      <View className="flex-col gap-3">
        {colorData.map((row, rowIndex) => (
          <View key={rowIndex} className="flex-row gap-3 flex-wrap">
            {row.map((item, colIndex) =>
              renderColorItem(item, `${rowIndex}-${colIndex}`)
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ColorPalette;
