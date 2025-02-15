import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66855e71b3f57b06dd4c7949.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (params = {}, thunkAPI) => {
    try {
      const { data } = await axios.get('/advert', { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAdvertById = createAsyncThunk(
  'adverts/fetchAdvertById',
  async ({ id }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/advert/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
