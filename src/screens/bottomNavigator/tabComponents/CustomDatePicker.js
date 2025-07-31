import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
} from "react-native";

const CustomDatePicker = ({
  onDateChange,
  initialDate = { day: "", month: "", year: "" },
}) => {
  const [day, setDay] = useState(initialDate.day);
  const [month, setMonth] = useState(initialDate.month);
  const [year, setYear] = useState(initialDate.year);

  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const handleDayChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");
    if (
      numericText === "" ||
      (parseInt(numericText) >= 1 && parseInt(numericText) <= 31)
    ) {
      setDay(numericText);
      // Auto-focus to month field when day is complete
      if (numericText.length === 2) {
        monthRef.current?.focus();
      }
      // Call onChange callback
      onDateChange?.({ 
        day: numericText, 
        month, 
        year 
      });
    }
  };

  const handleMonthChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");
    if (
      numericText === "" ||
      (parseInt(numericText) >= 1 && parseInt(numericText) <= 12)
    ) {
      setMonth(numericText);
      // Auto-focus to year field when month is complete
      if (numericText.length === 2) {
        yearRef.current?.focus();
      }
      // Call onChange callback
      onDateChange?.({ 
        day, 
        month: numericText, 
        year 
      });
    }
  };

  const handleYearChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");
    if (numericText === "" || numericText.length <= 4) {
      setYear(numericText);
      // Call onChange callback
      onDateChange?.({ 
        day, 
        month, 
        year: numericText 
      });
    }
  };

  return (
    <View className="w-full mb-2">
      {/* Header */}
      <Text className="text-[16px] font-SemiBold text-textPrimary mb-2">
        Date Of Birth
      </Text>

      {/* Date Input Fields */}
      <View className="flex-row items-center gap-3">
        {/* Day Input */}
        <View className="flex-1">
          <TextInput
            ref={dayRef}
            className="w-full h-12 px-4 bg-white border border-zinc-200 rounded-xl font-Regular text-base focus:border-borderAction"
            value={day}
            onChangeText={handleDayChange}
            keyboardType="numeric"
            maxLength={2}
            selectTextOnFocus
            placeholder=""
            onSubmitEditing={() => monthRef.current?.focus()}
          />
          <Text className="text-md text-textPrimary  mt-1">
            DD
          </Text>
        </View>

        {/* Month Input */}
        <View className="flex-1">
          <TextInput
            ref={monthRef}
            className="w-full h-12 px-4 bg-white border border-zinc-200 rounded-xl font-Regular text-base focus:border-borderAction"
            value={month}
            onChangeText={handleMonthChange}
            keyboardType="numeric"
            maxLength={2}
            selectTextOnFocus
            placeholder=""
            onSubmitEditing={() => yearRef.current?.focus()}
          />
          <Text className="text-md text-textPrimary  mt-1">
            MM
          </Text>
        </View>

        {/* Year Input */}
        <View className="flex-1">
          <TextInput
            ref={yearRef}
            className="w-full h-12 bg-white border border-zinc-200 rounded-xl px-4 font-Regular text-base focus:border-borderAction"
            value={year}
            onChangeText={handleYearChange}
            keyboardType="numeric"
            maxLength={4}
            selectTextOnFocus
            placeholder=""
          />
          <Text className="text-md text-textPrimary  mt-1">
            YYYY
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDatePicker;