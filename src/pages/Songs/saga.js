import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {songsService} from "../../services/songsService";
import {FAILURE, REQUEST, SUCCESS} from "../../store/actionsConstants";
import {failureAction, successAction} from "./actions";

const SPOTIFY_URL = 'https://api.spotify.com/v1/me';
const token = "BQCNTqvRlWft6yqMWpaq2BcAgkYekLt_Ec1udVq-CHS_kXaMUQa78b3piLRyuhEP0Y2WYCJ4X5JD8whFNyyFBrMxr1RpHcPeP3WivwtxtJsUImlrFOfk8xm7ZeqrvFIrjJdOCx4so6HEGjg0ZJhIok5RqeMOr9NU_aFBtJ-NiK47Vjdg3xmlKQXvQvx_tbfedZICuo7xYFlFqUvKX6qpCCBsyVvjcP22SwNOw_ud4-ZNJnA1m1zbF4gTUdY7s08CYLWuWfbeWpyjc2v7nyOb6ANqe_0om2eUtZlMhimA9NDUXN_N";
const songsEndpoint = "/tracks";

function* getSongs(action) {
    try {
        const data = yield call(() => songsService.requestGetSongs(SPOTIFY_URL, token, songsEndpoint));
        yield put(successAction(data));
    } catch (e) {
        yield put(failureAction());
        // yield put({type: FAILURE, message: e.message});
    }
}

function* addSongs(action) {
    try {
        const data = yield call(() => songsService.requestAddSongs(SPOTIFY_URL, token, songsEndpoint));
        yield put(successAction(data));
    } catch (e) {
        yield put(failureAction());
        // yield put({type: FAILURE, message: e.message});
    }
}

function* deleteSongs(action) {
    try {
        const data = yield call(() => songsService.requestDeleteSongs(SPOTIFY_URL, token, songsEndpoint));
        yield put(successAction(data));
    } catch (e) {
        yield put(failureAction());
        // yield put({type: FAILURE, message: e.message});
    }
}

export function* songsSaga() {
    yield takeLatest(REQUEST, getSongs);
    // yield takeLatest(REQUEST, addSongs);
    // yield takeLatest(REQUEST, deleteSongs);
}