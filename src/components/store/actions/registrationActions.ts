import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk('registration/registerUser', async (formData: any) => {
  try {
    const response = await axios.post('/register', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
});
