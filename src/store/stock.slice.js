import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { STOCK } from '../constants';
import { extractErrorMessage } from '../utils';

const initialState = {
  data: STOCK,
  selected: null,
  isLoading: false,
};

export const getStock = createAsyncThunk('stock/getStock', async (searchId, thunkAPI) => {
  try {
    const result = await state.data.find((element) => element.id === searchId);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getStock.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStock.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selected(action.payload);
      })
      .addCase(getStock.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default stockSlice.reducer;
