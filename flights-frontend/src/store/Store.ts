import { configureStore } from '@reduxjs/toolkit'
import flightsReducer from './slices/flights/FlightsSlice'
import currentFlightReducer from './slices/currentFlight/CurrentFlightSlice'

export const store = configureStore({
  reducer: {
    flights: flightsReducer,
    currentFlight: currentFlightReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch