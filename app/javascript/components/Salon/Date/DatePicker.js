import React, { useState } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

const DatePicker = () => {
  const [date, setDate] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  function onDateChange(date) {
    setDate(date);
    console.log(date)
  }

  function onFocusChange({ focused }) {
    setIsFocused(focused);
  }

  return (
    <SingleDatePicker
      id="date_input"
      date={date}
      focused={isFocused}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
    />
  );
}

export default DatePicker