import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects';
import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    GET_CATEGORIES,
    SET_CATEGORIES
} from "./actionTypes";

const api = axios.create({ baseURL: 'http://localhost:3000' });

function* getCategoriesSaga(){
    let items = yield call(api.get, '/categories');
    //data = yield data.json();
    console.log("Now in Sagas getCategories", items.data)
    yield put({type: SET_CATEGORIES, payload: items})
}

function* addCategoriesSaga(action) {
    try {
      yield call(api.post, '/categories', action.payload);
      yield getCategoriesSaga(); // Refresh list
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }


  function* deleteCategoriesSaga(action) {
    try {
      yield call(api.delete, `/categories/${action.payload}`);
      yield getCategoriesSaga(); // Refresh items list
    } catch (error) {
      console.error(error.message);
    }
  }
  

function* rootSaga(){
    yield takeEvery(GET_CATEGORIES, getCategoriesSaga);
    yield takeEvery(ADD_CATEGORY, addCategoriesSaga);
    yield takeEvery(DELETE_CATEGORY, deleteCategoriesSaga);
}

export default rootSaga;