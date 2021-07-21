import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import reducer from "../Pages/Songs/reducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

// const middleware = [sagaMiddleware];

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(sagaMiddleware),
);

// store.subscribe(state => console.dir(state));

sagaMiddleware.run(rootSaga)


