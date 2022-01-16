import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/sliceCar/carSlice'

export const store = configureStore({
  reducer: {
   car: carReducer
  },
});
