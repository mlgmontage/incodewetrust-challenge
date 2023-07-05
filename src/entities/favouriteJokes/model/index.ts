import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

type FavouriteT = {
  id: string
  joke: string
}

type FavouritesT = FavouriteT[]

const initialState: FavouritesT = []

const favouriteJokesModel = createSlice({
  name: 'favouriteJokes',
  initialState,
  reducers: {
    createJoke: (state, { payload }: PayloadAction<FavouriteT>) => {
      const isEmpty = !payload.id.length
      const isDuplicate = state.find(joke => joke.id === payload.id)

      // Disallowing empty and duplicate
      if (isEmpty || isDuplicate) {
        throw new Error('Cannot create joke')
      }
      else {
        state.push(payload)
      }

    },
    deleteJoke: (state, { payload }: PayloadAction<number>) => {
      state.splice(payload, 1)
    }
  }
})

export default favouriteJokesModel.reducer

export const { createJoke, deleteJoke } = favouriteJokesModel.actions

export const favouriteJokesSelector = (state: RootState) => state.favouriteJokes