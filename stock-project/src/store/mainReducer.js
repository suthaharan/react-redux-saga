import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";

const mainReducer = combineReducers({
    // public
    categoryReducer
  });
  
  export default mainReducer;