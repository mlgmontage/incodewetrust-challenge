import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

type FavouriteT = {
  id: string
  joke: string
}

type FavouritesT = FavouriteT[]

const initialState: FavouritesT = [
  { id: '1', joke: 'joke 1' },
  { id: '2', joke: 'joke 2' },
  { id: '3', joke: 'joke 3' },
]


const favouriteJokesModel = createSlice({
  name: 'favouriteJokes',
  initialState,
  reducers: {
    createJoke: (state, { payload }: PayloadAction<FavouriteT>) => {
      state.push(payload)
    }
  }
})

export default favouriteJokesModel.reducer

export const { createJoke } = favouriteJokesModel.actions

export const favouriteJokesSelector = (state: RootState) => state.favouriteJokes