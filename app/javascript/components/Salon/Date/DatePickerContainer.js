import React, { Fragment } from "react";
import DatePicker from './DatePicker';
import TimePickerSchedule from "./TimePicker";


import styled from "styled-components";

const  DatePickerContainer = () => {
  return (
    <Container style={{
      backgroundColor: "white"
    }}>
      <h3>Select day and time of your appointment
      </h3>
      <DatePicker />
      <TimePickerSchedule />
    </Container>
  )
}

const Container = styled.div`
  width: 280px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 8px;
`

export default DatePickerContainer