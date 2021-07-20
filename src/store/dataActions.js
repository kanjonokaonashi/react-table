import {FAILURE, REQUEST, SUCCESS} from "./actionsTypeConstants";

export const requestAction = (data) => {
    return {
        type: REQUEST,
        // payload: data,
    }
}

export const successAction = (item) => {
    return {
        type: SUCCESS,
        payload: item,
    }
}

export const failureAction = (item) => {
    return {
        type: FAILURE,
        // payload: item,
    }
}