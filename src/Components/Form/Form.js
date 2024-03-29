import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Form.css';
import { addEmployee } from '../../actions/userSlice';
import Modal from "la-react-modal"
import StateSelect from '../StateSelect/stateSelect'
import DatePickerComponent from '../DatePicker/DatePicker';

export default function Form() {
  const dispatch = useDispatch();

  const initialEmployeeState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "", 
    startDate: "", 
    department: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: ""
    }
};

const [employee, setEmployee] = useState(initialEmployeeState);


const handleInputChange = (event) => {
  const { name, value } = event.target;
  if (name === 'state') {
    setEmployee(prevState => ({ 
      ...prevState, 
      address: { ...prevState.address, [name]: value }
    }));
  } else {
    setEmployee(prevState => ({ ...prevState, [name]: value }));
  }
};

  const handleDateChange = (id, date) => {
    if (date) {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1);
      const dateString = newDate.toISOString().split('T')[0];
      setEmployee(prevState => ({ ...prevState, [id]: dateString }));
    } else {
      setEmployee(prevState => ({ ...prevState, [id]: null }));
    }
  };

  const saveEmployee = () => {
    dispatch(addEmployee(employee));
    
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className='Form'>
      <h2>Create Employee</h2>
      <form id="create-employee">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" value={employee.firstName} onChange={handleInputChange} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" value={employee.lastName} onChange={handleInputChange} />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        {/* <input type="text" id="dateOfBirth" value={employee.dateOfBirth} onChange={handleInputChange} /> */}
        <DatePickerComponent  
  id="dateOfBirth" 
  onChange={handleDateChange} 
/>

        <label htmlFor="startDate">Start Date</label>
        <DatePickerComponent  
  id="startDate" 
  onChange={handleDateChange} 
/>
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input name="street" type="text" value={employee.street} onChange={handleInputChange} />

          <label htmlFor="city">City</label>
          <input name="city" type="text" value={employee.city} onChange={handleInputChange} />
          
        <label htmlFor="state">State</label>
       <StateSelect 
  name="state" 
  value={employee.address.state} 
  onChange={handleInputChange} 
/>
          <label htmlFor="zipCode">Zip Code</label>
          <input name="zipCode" type="number" value={employee.zipCode} onChange={handleInputChange} />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" id="department" value={employee.department} onChange={handleInputChange}>
  <option>Sales</option>
  <option>Marketing</option>
  <option>Engineering</option>
  <option>Human Resources</option>
  <option>Legal</option>
</select>
        <button type="button" onClick={() => { saveEmployee(); setIsModalOpen(true); }}>Save</button>
      </form>

      <Modal isOpen={isModalOpen} onClose={closeModal}> 
        <div>
          <h3>Employee Created!</h3>
        </div>
       </Modal>

    </div>
  );
}