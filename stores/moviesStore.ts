import { createSlice, configureStore } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = movieSlice.actions

export const store = configureStore({
  reducer: movieSlice.reducer
})

store.subscribe(() => console.log(store.getState()))