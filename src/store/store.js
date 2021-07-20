import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import songsSaga from '../Pages/Songs/saga';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

sagaMiddleware.run(songsSaga)


