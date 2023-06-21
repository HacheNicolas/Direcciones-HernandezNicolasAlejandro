import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { extractErrorMessage } from '../utils';
import { URL_GEOCODING } from '../utils/maps';
import Event from '../model/event';
import { insertEvents, selectEvents } from '../db';

const initialState = {
  data: [],
  selected: null,
  isLoading: false,
};

export const saveEvent = createAsyncThunk('events/saveEvent', async (event, thunkAPI) => {
  try {
    const response = await fetch(URL_GEOCODING(event.coords.lat, event.coords.lng));

    if (!response.ok) {
      return thunkAPI.rejectWithValue('¡Ocurrió un error!');
    }

    const data = await response.json();
    if (!data.results) thunkAPI.rejectWithValue('No se ha podido encontrar la dirección del lugar');

    const address = data.results[0].formatted_address;
    const result = await insertEvents(event.name, event.description, event.date, address);

    const newEvent = new Event(result.insertId, event.name, event.description, event.date, address);

    return newEvent;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

export const getEvents = createAsyncThunk('events/getEvents', async (_, thunkAPI) => {
  try {
    const result = await selectEvents();
    return result?.rows?._array;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(saveEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(saveEvent.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.date = action.payload;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default eventsSlice.reducer;
