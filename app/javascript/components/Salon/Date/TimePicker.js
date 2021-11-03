import React from "react";
import 'antd/dist/antd.css';

import { TimePicker } from 'antd';
import moment from 'moment';
const format = 'HH:mm';

const TimePickerSchedule =() => {
  return (
    <TimePicker defaultValue={moment('12:08', format)} format={format} />
  )
}

export default TimePickerSchedule