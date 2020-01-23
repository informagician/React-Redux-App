import { START,SUCCESS,FAILURE } from "../actions";

const initialState = () => {
    return {
        ticker: null,
        isLoading: false,
        error: '',
    }
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case START:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS:
            return {
                ...state,
                isLoading: false,
                ticker: action.payload
            }
        case FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}