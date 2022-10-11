import { configureStore, createSlice } from "@reduxjs/toolkit";
import { profileSlice } from "./profile";
import { utilsSlice } from "./utils";

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

export const store = configureStore({
  reducer: {
    listings: listingSlice.reducer,
    profile: profileSlice.reducer,
    utils: utilsSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
