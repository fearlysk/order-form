import { configureStore } from '@reduxjs/toolkit';
import numbersReducer from './reducers/users/usersReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const numbers = persistReducer(persistConfig, numbersReducer)

export const store = configureStore({
  reducer: {
    numbers,
  },
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
