import {combineReducers} from "redux";
import songsReducer from '../Pages/Songs/reducer';

export const rootReducer = combineReducers(
    {
        songsReducer,
        playlistsReducer: "" // should be all other reducers
    }
)