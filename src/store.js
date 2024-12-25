import { legacy_createStore as createStore,applyMiddleware,combineReducers} from 'redux'
 import {thunk} from "redux-thunk"

  import getReducer from "../src/api/GetApiReducer"

 const rootReducer= combineReducers({

     get:getReducer
 })





 const store= createStore(rootReducer,applyMiddleware(thunk))

 export default store;