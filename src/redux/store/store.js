import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { restaurants } from '../reducers/reducers';
import rootReducer from '../reducers/reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware:[thunk]
    })
// });

export default store;