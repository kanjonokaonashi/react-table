import {takeLatest, all} from "redux-saga/effects";
import {REQUEST} from "./actionsConstants";
import {songsSaga} from "../Pages/Songs/sagas";

export default function* rootSaga() {
    yield all([
        songsSaga(),
    ])
}