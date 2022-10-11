import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface Utils {
  greeting: string;
}

const initialState: Utils = {
  greeting: "Bom dia"
}

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setGreeting: (state, action: PayloadAction<string>) => {
      state.greeting = action.payload;
    }
  }
})


export const { setGreeting } = utilsSlice.actions;
