import { combineReducers } from '@reduxjs/toolkit';
import talentsReducer from './talentsReducer';


const rootReducer = combineReducers({
  talents: talentsReducer
});

export default rootReducer;