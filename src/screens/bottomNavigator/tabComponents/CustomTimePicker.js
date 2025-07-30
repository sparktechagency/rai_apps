import { MoveRight } from "lucide-react-native";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const CustomTimePicker = ({
  visible,
  onCancel,
  onConfirm,
  initialTime = { hour: "1", minute: "00", period: "AM" },
}) => {
  const [hour, setHour] = useState(initialTime.hour);
  const [minute, setMinute] = useState(initialTime.minute);
  const [period, setPeriod] = useState(initialTime.period);

  useEffect(() => {
    if (visible) {
      setHour(initialTime.hour);
      setMinute(initialTime.minute);
      setPeriod(initialTime.period);
    }
  }, [visible, initialTime]);

  const hourRef = useRef(null);
  const minuteRef = useRef(null);

  const handleHourChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");
    if (
      numericText === "" ||
      (parseInt(numericText) >= 1 && parseInt(numericText) <= 12)
    ) {
      setHour(numericText);
    }
  };

  const handleMinuteChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");
    if (
      numericText === "" ||
      (parseInt(numericText) >= 0 && parseInt(numericText) <= 59)
    ) {
      setMinute(numericText.padStart(2, "0"));
    }
  };

  const handleConfirm = () => {
    const formattedHour = hour.padStart(1, "");
    const formattedMinute = minute.padStart(2, "0");
    onConfirm({ hour: formattedHour, minute: formattedMinute, period });
  };

  const togglePeriod = (selectedPeriod) => {
    setPeriod(selectedPeriod);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View className="flex-1 bg-black/50  justify-center items-center px-5">
        <View
          className="bg-white rounded-2xl p-6"
          style={{ width: width * 0.85, maxWidth: 350 }}
        >
          {/* Header */}
          <Text className="text-lg font-Medium text-zinc-500 mb-6 text-left">
            ENTER TIME
          </Text>

          {/* Time Section */}
          <View className="flex-row items-start justify-center mb-10">
            {/* Hour Input */}
            <View className="">
              <TextInput
                ref={hourRef}
                className="w-28 h-28 focus:bg-white bg-zinc-200  rounded-xl focus:text-surfaceAction text-4xl font-light text-center border-2 border-white focus:border-surfaceAction "
                value={hour}
                onChangeText={handleHourChange}
                keyboardType="numeric"
                maxLength={2}
                selectTextOnFocus
                onSubmitEditing={() => minuteRef.current?.focus()}
              />
              <Text className="text-md text-zinc-500 font-Regular">Hour</Text>
            </View>

            {/* Colon */}
            <View className="px-4 pt-12 justify-center items-center">
              <View className="w-1.5 h-1.5 bg-zinc-900 rounded-full my-0.5" />
              <View className="w-1.5 h-1.5 bg-zinc-900 rounded-full my-0.5" />
            </View>

            {/* Minute Input */}
            <View className="">
              <TextInput
                ref={minuteRef}
                className="w-28 h-28 focus:bg-white bg-zinc-200  rounded-xl focus:text-surfaceAction text-4xl font-light text-center border-2 border-white focus:border-surfaceAction "
                value={minute}
                onChangeText={handleMinuteChange}
                keyboardType="numeric"
                maxLength={2}
                selectTextOnFocus
              />
              <Text className="text-md text-zinc-500 font-Regular">Minute</Text>
            </View>

            {/* AM/PM */}
            <View className="ml-3  border border-gray-400 rounded-md">
              {["AM", "PM"].map((item) => (
                <TouchableOpacity
                  key={item}
                  className={` p-4 min-w-[50px] items-center rounded-md  ${
                    period === item ? "bg-surfaceAction" : "bg-white"
                  }`}
                  onPress={() => togglePeriod(item)}
                >
                  <Text
                    className={`text-base font-Medium  ${
                      period === item ? "text-white" : "text-zinc-500"
                    }`}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Action Buttons */}
          <View className="flex-row justify-end items-center">
            {/* Cancel Button */}
            <TouchableOpacity
              onPress={onCancel}
              activeOpacity={0.7}
              className="flex-row items-center py-3 px-4"
            >
              <Text className="text-lg text-textPrimary font-medium mr-2">
                Cancel
              </Text>
              <MoveRight color="#000"/>
            </TouchableOpacity>

            {/* Confirm Button */}
            <TouchableOpacity
              onPress={handleConfirm}
              activeOpacity={0.8}
              className="bg-surfaceAction flex-row items-center py-3 px-6 rounded-2xl"
            >
              <Text className="text-lg text-white font-semibold mr-2">
                OK
              </Text>
              <MoveRight color="white"/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomTimePicker;
