import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {songsService} from "../../services/songsService";
import {FAILURE, REQUEST, SUCCESS} from "../../store/actionsConstants";
import {failureAction, successAction} from "./actions";

const SPOTIFY_URL = 'https://api.spotify.com/v1/me';
const token = "BQBYZFOrbwLiTb-QpcYj8PcND-BBaT1lxdyxpJbRIMZjPH74fUGcu2-Vyxf9H0ar4FbquG5k9_n-ThteeegMcKu8tEx8we9CgU84_WHqLrQvPv44titK6YHY8Prz6MSd2arD231jBaTZSQt3M7kaYgF7rMD63DXXERo9E4cTPVVV2J1mnEmoNmSkgkz3mTD2NsUCQ8OpNm6RKAN5m2HGUgBEfz4rhKTlxlQUN_a9C6PAaa8sNAxDzC3ax6-RqrXaF-zPoSeWOXhaZU-ROQ_pESTeahvvXTC9FngcISKAxGBRMxpb";
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
    yield takeLatest(REQUEST, addSongs);
    yield takeLatest(REQUEST, deleteSongs);
}