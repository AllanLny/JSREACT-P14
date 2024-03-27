import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Form.css';
import { addEmployee } from '../../actions/userSlice';

export default function Form() {
  const dispatch = useDispatch();

  const initialEmployeeState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
  };

  const [employee, setEmployee] = useState(initialEmployeeState);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setEmployee({ ...employee, [id]: value });
  };

  const saveEmployee = () => {
    dispatch(addEmployee(employee));
  };



  return (
    <div className='Form'>
      <h2>Create Employee</h2>
      <form id="create-employee">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" value={employee.firstName} onChange={handleInputChange} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" value={employee.lastName} onChange={handleInputChange} />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input type="text" id="dateOfBirth" value={employee.dateOfBirth} onChange={handleInputChange} />

        <label htmlFor="startDate">Start Date</label>
        <input type="text" id="startDate" value={employee.startDate} onChange={handleInputChange} />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" value={employee.street} onChange={handleInputChange} />

          <label htmlFor="city">City</label>
          <input id="city" type="text" value={employee.city} onChange={handleInputChange} />

          <label htmlFor="state">State</label>
          <input id="state" type="text" value={employee.state} onChange={handleInputChange} />

          <label htmlFor="zipCode">Zip Code</label>
          <input id="zipCode" type="number" value={employee.zipCode} onChange={handleInputChange} />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" id="department" value={employee.department} onChange={handleInputChange}>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        <button type="button" onClick={saveEmployee}>Save</button>
      </form>
    </div>
  );
}