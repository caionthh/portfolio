import { configureStore, createSlice } from "@reduxjs/toolkit";

interface Listing {
  value: number;
}

const initialState: Listing = {
  value: 0
}

const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {

  }
})

// export const

const store = configureStore({
  reducer: {
    listings: listingSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
