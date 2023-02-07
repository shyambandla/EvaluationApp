import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "images": {
        "profile": {
          "image": "string",
          "info": "string"
        },
        "leftFender": {
          "image": "string",
          "info": "string"
        },
        "rightFender": {
          "image": "string",
          "info": "string"
        },
        "rightSide": {
          "image": "string",
          "info": "string"
        },
        "rightSideFrontEdge": {
          "image": "string",
          "info": "string"
        },
        "rightSideRearEdge": {
          "image": "string",
          "info": "string"
        },
        "rightSideRightEdge": {
          "image": "string",
          "info": "string"
        },
        "rightQuarterPanel": {
          "image": "string",
          "info": "string"
        },
        "rearSide": {
          "image": "string",
          "info": "string"
        },
        "rearSideLeftEdge": {
          "image": "string",
          "info": "string"
        },
        "rearQuarterPanel": {
          "image": "string",
          "info": "string"
        },
        "leftSide": {
          "image": "string",
          "info": "string"
        },
        "leftSideRearEdge": {
          "image": "string",
          "info": "string"
        },
        "leftSideFrontEdge": {
          "image": "string",
          "info": "string"
        },
        "leftSideProfilePic": {
          "image": "string",
          "info": "string"
        },
        "frontView": {
          "image": "string",
          "info": "string"
        },
        "engineCompartment": {
          "image": "string",
          "info": "string"
        },
        "boot": {
          "image": "string",
          "info": "string"
        },
        "frontWindScreen": {
          "image": "string",
          "info": "string"
        },
        "interiorWindScreen": {
          "image": "string",
          "info": "string"
        },
        "odometerReading": {
          "image": "string",
          "info": "string"
        },
        "abcPedals": {
          "image": "string",
          "info": "string"
        },
        "chassisNumber": {
          "image": "string",
          "info": "string"
        },
        "rcFrontImage": "string"
      },
};

export const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {
        // Add your reducers here
        setImages: (state, action) => {
            state.images = action.payload;
        },
        setUrl: (state, action) => {
            state.images[action.payload.key].image = action.payload.value;
        }
    },
});

export const { setImages} = imagesSlice.actions;

export const selectImages = (state) => state.images.images;

export default imagesSlice.reducer;