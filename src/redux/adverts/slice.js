import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchAdvertById } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
    hasMore: true,
  },

  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(advert => advert._id !== action.payload._id);
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.meta.arg.page === 1) {
          state.items = action.payload;
        } else {
          state.items = [...state.items, ...action.payload];
        }
        state.hasMore = action.payload.length >= action.meta.arg.limit;
      })
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAdvertById.pending, handlePending)
      .addCase(fetchAdvertById.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAdvertById.rejected, handleRejected);
  },
});

export const { addToFavorites, removeFromFavorites } = slice.actions;

export default slice.reducer;
