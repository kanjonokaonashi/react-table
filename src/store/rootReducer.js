import {combineReducers} from "redux";
import songsReducer from '../pages/Songs/reducer';
import productsReducer from '../pages/Products/reducer';

export const rootReducer = combineReducers({
    products: productsReducer,
});