import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    GET_CATEGORIES,
    SET_CATEGORIES
} from "./actionTypes";
  
// action trigger id is returned is returned here by action creator
export const getCategories = () => { return {type: GET_CATEGORIES}};

export const setCategories = (items) => ({ type: SET_CATEGORIES, payload: items.data });

export const addCategory = (category) => ({type: ADD_CATEGORY, payload: category});

export const deleteCategory = categoryId => {
    console.log("In delete action => ", categoryId);
    return  {
        type: DELETE_CATEGORY,
        payload: categoryId,
    }
};