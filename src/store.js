import { configureStore, createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: { path: '' },
  reducers: {
    setPath: (state, action) => {
      state.path = action.payload;
    },
  },
});

export const { setPath } = navigationSlice.actions;

const store = configureStore({
  reducer: {
    navigation: navigationSlice.reducer,
  },
});

export default store;
