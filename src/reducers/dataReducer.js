import _ from "lodash";

const dataReducer = (state = {isLoading: true}, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'LOADING':
            return {...state, isLoading: action.payload};
        case 'LOADDATA': // should have the post request here
            return {...state, data: action.payload};

        case 'REQUEST':
            return {...state, isLoading: true}
        case 'SUCCESS':
            return {...state, isLoading: false, data: action.payload}
        case 'FAILURE':
            return {...state, isLoading: false}
        default: return state;
    }
}

export default dataReducer;