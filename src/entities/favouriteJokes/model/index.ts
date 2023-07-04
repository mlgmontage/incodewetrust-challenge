import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

type FavouritesT = {
  id: string
  joke: string
}[]

const initialState: FavouritesT = [
  { id: '1', joke: 'joke 1' },
  { id: '2', joke: 'joke 2' },
  { id: '3', joke: 'joke 3' },
]


const favouriteJokesModel = createSlice({
  name: 'favouriteJokes',
  initialState,
  reducers: {}
})

export default favouriteJokesModel.reducer

export const favouriteJokesSelector = (state: RootState) => state.favouriteJokes