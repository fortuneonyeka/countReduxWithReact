import {createStore, combineReducers} from 'redux';

import { counterReducer } from "../reducers/CounterReducers"
import { evenCounterReducer } from "../reducers/EvenCounterReducer";


 const rootReducers = combineReducers({
  counter: counterReducer, 
  evenCounter: evenCounterReducer
})
 

export const store = createStore(rootReducers)