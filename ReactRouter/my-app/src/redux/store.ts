import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import counterReducer from "./counter/counterSlice.ts"
import todoReducer from "./todo/todoSlice.ts"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store