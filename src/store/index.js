import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import ordersReducer from './orders.slice';
import eventsReducer from './events.slice';
import stockReducer from './stock.slice';

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    events: eventsReducer,
    stock: stockReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
