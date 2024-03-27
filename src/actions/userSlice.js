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
        address: action.payload.address,
      };
      state.employees.push(newEmployee);
    },
  },
});

export const { addEmployee } = userSlice.actions;
export default userSlice.reducer;