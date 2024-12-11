import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    SET_CATEGORIES
} from "./actionTypes";

const initialState = {
    items: [],
    loading: false,
    error: null
  };

export const categoryReducer = (state = initialState, action) => {
    console.log("Category data reducer called!", action);
    switch(action.type){
        case ADD_CATEGORY:
            console.log("ADD_CATEGORY data reducer called!", action);
            return {...state, loading: true, error: null};
        case SET_CATEGORIES:
            console.log("SET_CATEGORIES data reducer called!", action);
            console.log(action.payload.data);
            //state = action.payload.data;
            return {...state, items: action.payload.data, loading: false, error: null};
        case DELETE_CATEGORY:
            // const updatedCategories = categories.filter(item => item.id !== data.id);
            // return updatedCategories;
            console.log("DELETE_CATEGORY data reducer called!", action);
            return {...state, loading: true, error: null};
        default:
            return state;
    }

}