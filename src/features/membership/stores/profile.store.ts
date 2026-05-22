import { createSlice } from "@reduxjs/toolkit";

interface ProfileState {
  isEditing: boolean;
}

const initialState: ProfileState = {
  isEditing: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setEditMode(state, action: { payload: boolean }) {
      state.isEditing = action.payload;
    },
    resetEdit(state) {
      state.isEditing = false;
    },
  },
});

export const { setEditMode, resetEdit } = profileSlice.actions;
export default profileSlice.reducer;
