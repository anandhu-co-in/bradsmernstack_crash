import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import goalReducer from '../features/goals/goalSlice';


export const store = configureStore({
  reducer: {

    auth:authReducer,
    goal:goalReducer

  },
});


//the key above, is coming as the key of the state when i checked through redux dev tools