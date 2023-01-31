import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { formDataReducer } from './FormDataRedux';
// import formDataReducer from './FormDataRedux';

const rootReducer = combineReducers({
  formDataReducer,
});

const Store = configureStore({
  reducer: rootReducer,
//   middleware: [thunk, logger],
});

export default Store;
