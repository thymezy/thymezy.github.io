import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  author: {
    items: [],
    selected: []
  },
  asset: {
    items: [],
    selected: []
  }
};

const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    setItems: (state, action) => {
      const { name, items } = action.payload;
      state[name].items = items;
    },
    setSelected: (state, action) => {
      const { name, id } = action.payload;
      const selected = state[name].selected;
      state[name].selected = selected.includes(id)
        ? selected.filter(i => i !== id)
        : [...selected, id];

      // Update asset items based on author selection
      if (name === 'author') {
        state.asset.selected = [];
      }
    }
  }
});

export const { setItems, setSelected } = selectionSlice.actions;
export default selectionSlice.reducer;