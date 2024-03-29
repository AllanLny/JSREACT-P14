import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../DatePicker/DatePicker.css';

const DatePickerComponent = ({ id, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const dateString = date ? date.toISOString() : "";
    console.log(dateString);
    onChange(id, dateString);
  };

  return (
    <div className='DatePickerDiv'>
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy"
      placeholderText="Sélectionnez une date"
    />
  </div>
  );
};

export default DatePickerComponent;