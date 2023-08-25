import { configureStore } from '@reduxjs/toolkit';

import registrationReducer from './reducers/registrationReducer'; // Replace with the correct path and reducer


const store = configureStore({
  reducer: {
    registration: registrationReducer, // Add your reducers here

  },

});

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
