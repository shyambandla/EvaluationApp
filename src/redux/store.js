import { configureStore, applyMiddleware } from '@reduxjs/toolkit';


// Add your reducers here
import mainReducer from './slices/MainSlice';


const store = configureStore({
    reducer: {
        main: mainReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});



export default store;