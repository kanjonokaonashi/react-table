import {REQUEST, SUCCESS, FAILURE} from "../../store/actionsTypeConstants";

const reducer = (state = {isLoading: false}, action) => {
    switch(action.type) {
        case REQUEST:
            return {...state, isLoading: true};
        case SUCCESS:
            return {...state, isLoading: false, data: action.payload}
        case FAILURE:
            return {...state, isLoading: false}
        default: return state;
    }
}

export default reducer;