import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {productsService} from "../../services/productsService";
import {FAILURE, REQUEST, SUCCESS} from "../../store/actionsConstants";
import {failureAction, successAction} from "./actions";

const BASE_URL = 'https://fakestoreapi.com/products';

function* getProducts(action) {
    try {
        const data = yield call(() => productsService.requestGetProducts());
        yield put(successAction(data));
    } catch (e) {
        yield put(failureAction());
        // yield put({type: FAILURE, message: e.message});
    }
}

function* addProducts(action) {
    try {
        const data = yield call(() => productsService.requestAddProducts());
        yield put(successAction(data));
    } catch (e) {
        yield put(failureAction());
        // yield put({type: FAILURE, message: e.message});
    }
}

function* editProducts(action) {
    try {
        const data = yield call(() => productsService.requestEditProducts());
        yield put(successAction(data));
    } catch (e) {
        yield put(failureAction());
        // yield put({type: FAILURE, message: e.message});
    }
}

function* deleteProducts(action) {
    try {
        const data = yield call(() => productsService.requestDeleteProducts());
        yield put(successAction(data));
    } catch (e) {
        yield put(failureAction());
        // yield put({type: FAILURE, message: e.message});
    }
}

export function* productsSaga() {
    yield takeLatest(REQUEST, getProducts);
    // yield takeLatest(REQUEST, addProducts);
    // yield takeLatest(REQUEST, editProducts);
    // yield takeLatest(REQUEST, deleteProducts);
}