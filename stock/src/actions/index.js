import axios from 'axios';

export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// export const ticker = value => dispatch = {

// }

export const fetchActivity = () => dispatch => {
    dispatch({ type: START });
    axios
    .get(`https://cloud.iexapis.com/stable/stock/aapld/quote?token=pk_303e1d3f9911419ab8feead828409575`)
    .then(res => {
        dispatch({ type: SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({ type: FAILURE, payload: err})
    })
}

