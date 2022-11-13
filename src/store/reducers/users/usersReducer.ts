import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { addNumberToHistory } from '../../../api/numbers';
import { INumber } from '../../../interfaces/INumber';

export interface NumbersState {
  numbers: String[]
}

const initialState: NumbersState = {
  numbers: [],
}

const addNumberToDatabaseHandler = (nData: INumber) => {
  addNumberToHistory(nData);
}

export const numbersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNumber: (state, action) => {
        state.numbers.push(action.payload as never);
        const numberData: INumber = {
          number: action.payload
        }
        addNumberToDatabaseHandler(numberData);
    },
    removeNumber: (state, action) => {
        state.numbers.splice(action.payload, 1);
    }
  },
})

export const { addNumber, removeNumber } = numbersSlice.actions

export default numbersSlice.reducer
