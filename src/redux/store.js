import { configureStore, applyMiddleware } from '@reduxjs/toolkit';


// Add your reducers here
import mainReducer from './slices/MainSlice';
import dataReducer from './slices/DataSlice';

const store = configureStore({
    reducer: {
        main: mainReducer,
        data: dataReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});



export default store;