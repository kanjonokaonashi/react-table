import {takeLatest, all} from "redux-saga/effects";
import {REQUEST} from "./actionsConstants";
import {songsSaga} from "../pages/Songs/saga";
import {productsSaga} from "../pages/Products/saga";

export default function* rootSaga() {
    yield all([
        productsSaga(),
    ])
}