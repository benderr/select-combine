import {INCREMENT, DECREMENT} from "./actions";

export const initialState = {
    number: 0,
};

export const actionHandlers = {
    [INCREMENT]: (state) => {
        return {...state, number: state.number + 1};
    },

    [DECREMENT]: (state) => {
        return {...state, number: state.number - 1};
    },
};
