import * as ACTION_TYPES from "../actionsTypes";

export const initialState = {
    user: {},
    isAuthenticated: false,
    error: null,
};

export const authReducer = (
    state = initialState, { type, payload } = { type: "", payload: "" }
) => {
    switch (type) {
        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
                error: null,
            };
        case ACTION_TYPES.LOGIN_FAILURE:
            return {
                ...state,
                user: {},
                isAuthenticated: false,
                error: payload,
            };
        case ACTION_TYPES.UPDATE_USER_INFO:
            return {
                ...state,
                user: payload,
            };
        default:
            return state;
    }
};