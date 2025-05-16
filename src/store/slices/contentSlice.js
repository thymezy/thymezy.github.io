import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedAuthors: [],
  selectedAssets: [],
  selectedTypes: [],
  currentConfig: {},
  status: 'idle',
  error: null
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setSelectedTypes: (state, action) => {
      state.selectedTypes = action.payload;
    },
    setCurrentConfig: (state, action) => {
      state.currentConfig = action.payload;
    }
  }
});

export const { setSelectedTypes, setCurrentConfig } = contentSlice.actions;
export default contentSlice.reducer;