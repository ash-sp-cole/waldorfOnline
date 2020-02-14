import { createStore } from 'redux';
import rootReducer from '../reducers/index';


const initialState = {
    tech : 'intiatlSEt statel'
};

export const store = createStore(rootReducer,initialState);