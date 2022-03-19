import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';


export const store = configureStore({
  reducer: {

    auth:authReducer,

  },
});


//the key above, is coming as the key of the state when i checked through redux dev tools