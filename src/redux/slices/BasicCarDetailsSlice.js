import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registrationNumber:"",
     make:"",
     model:"",
     mfgYear:"",
     mfgMonth:"",
     version:"",
     color:"",
     numberOfOwners:"",
     registrationDate:"",
     odometerReading:"",
};

export const BasicCarDetailSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setRegistrationNo: (state, action) => {
            state.registrationNumber = action.payload;
        },
        setMake: (state, action) => {
            state.make = action.payload;
        },
        setModel: (state, action) => {
            state.model = action.payload;
        },
        setMfgYear: (state, action) => {
            state.mfgYear = action.payload;
        },
        setMfgMonth: (state, action) => {
            state.mfgMonth = action.payload;
        },
        setVersion: (state, action) => {
            state.version = action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },
        setNumberOfOwner: (state, action) => {
            state.numberOfOwners = action.payload;
        },
        setRegistrationDate: (state, action) => {
            state.registrationDate = action.payload;
        },
        setOdometerReading: (state, action) => {
            state.odometerReading = action.payload;
        },
        
    },
});

export const {setRegistrationNo,setMake,setModel,setMfgYear,setMfgMonth,setVersion,setColor,setNumberOfOwner,setRegistrationDate,setOdometerReading} = BasicCarDetailSlice.actions;

export const selectRegistrationNo = (state) => state.basicCarDetails.registrationNumber;
export const selectMake = (state) => state.basicCarDetails.make;
export const selectModel = (state) => state.basicCarDetails.model;
export const selectMfgYear = (state) => state.basicCarDetails.mfgYear;
export const selectMfgMonth = (state) => state.basicCarDetails.mfgMonth;
export const selectVersion = (state) => state.basicCarDetails.version;
export const selectColor = (state) => state.basicCarDetails.color;
export const selectNumberOfOwner = (state) => state.basicCarDetails.numberOfOwners;
export const selectRegistrationDate = (state) => state.basicCarDetails.registrationDate;
export const selectOdometerReading = (state) => state.basicCarDetails.odometerReading;
export const selectBasicCarDetails = (state) => state.basicCarDetails;
export default BasicCarDetailSlice.reducer;