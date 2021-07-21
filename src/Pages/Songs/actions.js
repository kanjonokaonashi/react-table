import {FAILURE, REQUEST, SUCCESS} from "../../store/actionsConstants";

export const requestAction = () => {
    return {
        type: REQUEST,
    }
}

export const successAction = (data) => {
    return {
        type: SUCCESS,
        payload: data,
    }
}

export const failureAction = (item) => {
    return {
        type: FAILURE,
        // payload: item,
    }
}