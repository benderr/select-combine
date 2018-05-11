import {INCREMENT, DECREMENT} from "./actions";

export const initialState = {
    number: 0,
};

export const actionHandlers = {
    // проверка изменения статуса у всех торг.точек
    [INCREMENT]: (state) => {
        return {...state, number: state.number + 1};
    },

    // при закрытии слоя регистрации ККТ
    [DECREMENT]: (state) => {
        return {...state, number: state.number - 1};
    },
};
