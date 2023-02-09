import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registrationNumber:"",
     make:"",
     model:"",
     mfgYear:"",
     mfgMonth:"",
     version:"",
     color:"",
     numberOfOwners:0,
     registrationDate:"",
     odometerReading:"",
     chassisNumber:"",
     engineNumber:"",
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
            const year=Number(action.payload)
            state.mfgYear = year;
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
            state.numberOfOwners = Number(action.payload);
        },
        setRegistrationDate: (state, action) => {
            state.registrationDate = action.payload;
        },
        setOdometerReading: (state, action) => {
            state.odometerReading = action.payload;
        },
        setChassisNumber: (state, action) => {
            state.chassisNumber = action.payload;
        },
       setEngineNumber: (state, action) => {
            state.engineNumber = action.payload;
        },
        
    },
});

export const {setRegistrationNo,setMake,setModel,setMfgYear,setMfgMonth,setVersion,setColor,setNumberOfOwner,setRegistrationDate,setOdometerReading,setChassisNumber,setEngineNumber} = BasicCarDetailSlice.actions;
 

export const selectRegistrationNo = (state) => state.basicCarDetail.registrationNumber;
export const selectMake = (state) => state.basicCarDetail.make;
export const selectModel = (state) => state.basicCarDetail.model;
export const selectMfgYear = (state) => state.basicCarDetail.mfgYear;
export const selectMfgMonth = (state) => state.basicCarDetail.mfgMonth;
export const selectVersion = (state) => state.basicCarDetail.version;
export const selectColor = (state) => state.basicCarDetail.color;
export const selectNumberOfOwners = (state) => state.basicCarDetail.numberOfOwners;
export const selectRegistrationDate = (state) => state.basicCarDetail.registrationDate;
export const selectOdometerReading = (state) => state.basicCarDetail.odometerReading;
export const selectEngineNumber = (state) => state.basicCarDetail.engineNumber;
export const selectChassisNumber = (state) => state.basicCarDetail.chassisNumber;

export const selectBasicCarDetails = (state) => state.basicCarDetail;
export default BasicCarDetailSlice.reducer;