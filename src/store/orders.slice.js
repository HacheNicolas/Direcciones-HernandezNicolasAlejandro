import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ORDERS } from '../constants';
import { extractErrorMessage } from '../utils';

const initialState = {
  data: ORDERS,
  selectedType: null,
  filteredOrders: [],
  selected: null,
  isLoading: false,
};

export const selectOrdersType = createAsyncThunk(
  'orders/selectOrdersType',
  async (orderType, thunkAPI) => {
    try {
      const result = await state.data.find((order) => order.orderType === orderType);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const filterOrders = createAsyncThunk('orders/filterOrders', async (orderType, thunkAPI) => {
  try {
    const result = await state.data.filter((order) => order.orderType === orderType);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

export const getOrder = createAsyncThunk('orders/getOrder', async (searchId, thunkAPI) => {
  try {
    const result = await state.data.find((order) => order.id === searchId);
    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(selectOrdersType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(selectOrdersType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedType(action.payload);
      })
      .addCase(selectOrdersType.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(filterOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(filterOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filteredOrders(action.payload);
      })
      .addCase(filterOrders.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selected(action.payload);
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default ordersSlice.reducer;
