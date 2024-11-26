import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Location } from '../../../models/Location'

//[0] is for departure airport and [1] is for arrival airport.
export interface LocationsState {
  value: Location[]
}

const initialState: LocationsState = {
  value: [],
}

export const airportsSlice = createSlice({
  name: 'airports',
  initialState,
  reducers: {
    loadAirports: (state, action: PayloadAction<Location[]>) => {
            
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadAirports } = airportsSlice.actions

export default airportsSlice.reducer