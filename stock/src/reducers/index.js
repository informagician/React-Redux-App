const initialState = () => {
    return {
        ticker: null,
        isLoading: false,
        error: '',
    }
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}