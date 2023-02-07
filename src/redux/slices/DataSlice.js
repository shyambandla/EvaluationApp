import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    answers: [],
    questions: [],
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        // Add your reducers here
        setAnswers: (state, action) => {
            state.answers = action.payload;
        },
        addAnswer: (state, action) => {
            const index = state.answers.findIndex(item=>item.id === action.payload.id)
            if(index === -1){
                state.answers.push(action.payload)
            }else{
                state.answers[index] = action.payload
            }
        }
    },
});

export const { setAnswers,addAnswer } = dataSlice.actions;

export const selectAnswers = (state) => state.data.answers;

export default dataSlice.reducer;