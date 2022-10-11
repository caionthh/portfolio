import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface Profile {
  name: string;
}

const initialState: Profile = {
  name: "John Doe"
}

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }
  }
})
