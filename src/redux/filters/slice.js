import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    equipment: [],
    vehicleType: '',
  },
  reducers: {
    updateFilters(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFilters } = slice.actions;
export default slice.reducer;
