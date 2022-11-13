import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface NumbersState {
  numbers: String[]
}

const initialState: NumbersState = {
  numbers: [],
}

export const numbersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNumber: (state, action) => {
        state.numbers.push(action.payload as never);
    },
    removeNumber: (state, action) => {
        state.numbers.splice(action.payload, 1);
    }
  },
})

export const { addNumber, removeNumber } = numbersSlice.actions

export default numbersSlice.reducer
