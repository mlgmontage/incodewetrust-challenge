import { configureStore } from "@reduxjs/toolkit";
import favouriteJokesReducer from '../entities/favouriteJokes/model'

export const store = configureStore({
  reducer: {
    favouriteJokes: favouriteJokesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>