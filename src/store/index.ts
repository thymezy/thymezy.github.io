import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';
import selectionReducer from './slices/selectionSlice';

export const store = configureStore({
  reducer: {
    content: contentReducer,
    selection: selectionReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;