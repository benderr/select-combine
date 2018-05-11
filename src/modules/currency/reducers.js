import {LOADING_CURRENCY_RATE, SET_RATE_FAIL, SET_RATE_SUCCESS} from "./actions";

export const initialState = {
    rate: null,
    loading: false,
    error: null,
    pair: null,
};

export const actionHandlers = {

    [LOADING_CURRENCY_RATE]: (state, {payload: {loading}}) => {
        return {...state, loading: loading, error: null};
    },

    [SET_RATE_SUCCESS]: (state, action) => {
        return {
            ...state,
            rate: action.payload.rate,
            pair: action.payload.currencyPair,
            error: null,
        };
    },

    [SET_RATE_FAIL]: (state, {payload: {error}}) => {
        return {...state, error: error}
    },
};
