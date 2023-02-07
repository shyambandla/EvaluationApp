import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authData: {},
    mainId: "",
};

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        // Add your reducers here
        setAuthData: (state, action) => {
            state.authData = action.payload;
        },
        setMainId: (state, action) => {
            state.mainId = action.payload;
        }
    },
});

export const { setAuthData,setMainId} = mainSlice.actions;


export const selectAuthData = (state) => state.main.authData;
 

export const selectToken = (state) => state.main.authData.sessionToken;

export const selectMainId = (state) => state.main.mainId;

export default mainSlice.reducer;