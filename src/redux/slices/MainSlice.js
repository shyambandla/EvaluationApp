import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authData: {},
};

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        // Add your reducers here
        setAuthData: (state, action) => {
            state.authData = action.payload;
        }
    },
});

export const { setAuthData} = mainSlice.actions;


export const selectAuthData = (state) => state.main.authData;

export const selectToken = (state) => state.main.authData.sessionToken;

export default mainSlice.reducer;