import { configureStore } from "@reduxjs/toolkit";
import favouriteJokesReducer from '../entities/favouriteJokes/model'

const getPersistedState = () => {
  const persisted = localStorage.getItem('root')

  if (persisted) {
    return JSON.parse(persisted)
  }

  return undefined
}

export const store = configureStore({
  reducer: {
    favouriteJokes: favouriteJokesReducer
  },
  preloadedState: getPersistedState()
})

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('root', JSON.stringify(state))
  console.warn(state);

})

export type RootState = ReturnType<typeof store.getState>