import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";
// store file
export const userSlice = createSlice({
  name: "user",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    // action.payload is basically an direct object of action in this exampel it is imported UserData
    rmUser: (state, action) => {
      //in this case it will return  obj reduced.....
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {
      state.value = state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    }
  }
});
export const { updateUser } = userSlice.actions;
export const { rmUser } = userSlice.actions;
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
