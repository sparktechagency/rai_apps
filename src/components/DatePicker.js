import React, { useState } from "react";
import { View, Modal, Pressable, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";

const DatePicker = ({ calendarVisible, setCalendarVisible }) => {
  return (



      <Modal visible={calendarVisible} animationType="slide" transparent>
        <View className="flex-1 justify-center bg-black/60 p-5">
          <View className="bg-white rounded-lg p-4 overflow-hidden">
            <Calendar
              onDayPress={(day) => {
                console.log(day.dateString);
                setCalendarVisible()
              }}
              theme={"LIGHT"}

              // minDate={moment().format('YYYY-MM-DD')}
            />
            <Pressable
              onPress={setCalendarVisible}
              className="bg-surfaceAction mt-4 py-3 rounded-lg items-center"
            >
              <Text className="text-white font-Medium ">Add to Calendar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

  );
};

export default DatePicker;
