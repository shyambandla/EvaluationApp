import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     RegistrationNo:"",
     Make:"",
     Model:"",
     MfgYear:"",
     MfgMonth:"",
     Version:"",
     Color:"",
     NumberOfOwner:"",
     RegistrationDate:"",
     OdometerReading:"",
};

export const BasicCarDetailSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setRegistrationNo: (state, action) => {
            state.RegistrationNo = action.payload;
        },
        setMake: (state, action) => {
            state.Make = action.payload;
        },
        setModel: (state, action) => {
            state.Model = action.payload;
        },
        setMfgYear: (state, action) => {
            state.MfgYear = action.payload;
        },
        setMfgMonth: (state, action) => {
            state.MfgMonth = action.payload;
        },
        setVersion: (state, action) => {
            state.Version = action.payload;
        },
        setColor: (state, action) => {
            state.Color = action.payload;
        },
        setNumberOfOwner: (state, action) => {
            state.NumberOfOwner = action.payload;
        },
        setRegistrationDate: (state, action) => {
            state.RegistrationDate = action.payload;
        },
        setOdometerReading: (state, action) => {
            state.OdometerReading = action.payload;
        },
        
    },
});

export const { setAuthData} = BasicCarDetailSlice.actions;
export default BasicCarDetailSlice.reducer;