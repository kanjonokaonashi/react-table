import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {Api} from "../../fetches";
import {FAILURE, REQUEST, SUCCESS} from "../../store/actionsTypeConstants";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchSongs(action) {
    try {
        const songs = yield call(Api.fetchSongs, action.payload.userId);
        yield put({type: SUCCESS, data: songs});
    } catch (e) {
        yield put({type: FAILURE, message: e.message});
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* songsSaga() {
    yield takeEvery(REQUEST, fetchSongs);
}

// /*
//   Alternatively you may use takeLatest.
//
//   Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
//   dispatched while a fetch is already pending, that pending fetch is cancelled
//   and only the latest one will be run.
// */
// function* songsSaga() {
//     yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default songsSaga;