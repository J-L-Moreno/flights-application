import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FlightOffer } from '../../../models/FlightOffer'

export interface FlightsState {
  value: FlightOffer[]
}

const initialState: FlightsState = {
  value: [],
}

export const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    load: (state, action: PayloadAction<FlightOffer[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
            
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { load } = flightsSlice.actions

export default flightsSlice.reducer