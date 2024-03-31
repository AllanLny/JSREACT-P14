import React from 'react';

const DepartementSelect= ({ name, value, onChange }) => {

    const states = [
        "Sales",
        "Marketing",
        "Engineering",
        "Human Resources",
        "Legal",
    ];

    const handleChange = (event) => {
      console.log(event.target.value); 
      onChange(event);
    };

  return (
    <select name={name} value={value} onChange={handleChange}>
      {states.map((state, index) => (
        <option key={index} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
};

export default DepartementSelect;