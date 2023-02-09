import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authData: {},
    mainId: "",
    userType: "",
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
        },
        setUserType: (state, action) => {
            state.userType = action.payload;
        }
    },
});

export const { setAuthData,setMainId,setUserType} = mainSlice.actions;


export const selectAuthData = (state) => state.main.authData;
 

export const selectToken = (state) => state.main.authData.sessionToken;
export const selectUserType= (state) => state.main.authData.employeeType.name;

export const selectMainId = (state) => state.main.mainId;

export default mainSlice.reducer;