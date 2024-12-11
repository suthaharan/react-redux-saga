import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mainReducer from "./mainReducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = () => [sagaMiddleware];


const setupStore = configureStore({
        reducer: mainReducer,
        middleware: middlewares
    });
sagaMiddleware.run(rootSaga);

export default setupStore;