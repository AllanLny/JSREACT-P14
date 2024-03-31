import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        dateOfBirth: action.payload.dateOfBirth,
        startDate: action.payload.startDate,
        department: action.payload.department,
        address: {
          street: action.payload.street,
          city: action.payload.city,
          state: action.payload.state,
          zipCode: action.payload.zipCode,
        },
      };
      state.employees.push(newEmployee);
    },
  },
});

export const { addEmployee, setDateOfBirth, setStartDate } = userSlice.actions;
export default userSlice.reducer;
