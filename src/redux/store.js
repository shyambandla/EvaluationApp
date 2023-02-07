import { configureStore, applyMiddleware } from '@reduxjs/toolkit';


// Add your reducers here
import mainReducer from './slices/MainSlice';
import dataReducer from './slices/DataSlice';
import basiCarDetailReducer from './slices/BasicCarDetailsSlice';
const store = configureStore({
    reducer: {
        main: mainReducer,
        data: dataReducer,
        basiCarDetailReducer: basiCarDetailReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});



export default store;