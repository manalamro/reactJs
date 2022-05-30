import * as ACTION_TYPES from "../actionsTypes";

export const initialState = {
    loading: false,
    users: [],
    promotions: []
};

export const usersReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ACTION_TYPES.LOGIN_USER:
            return {
                ...state,
                loading: true,
            };
        case ACTION_TYPES.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: actions.payload,
                isLoggedIn: true,
            };
        case ACTION_TYPES.LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: {},
                isLoggedIn: false,
            };
        case ACTION_TYPES.UPDATE_USER_INFO:
            return {
                ...state,
                loading: false,
                user: actions.payload,
            };
        case ACTION_TYPES.LOGOUT_USER:
            return {
                ...state,
                loading: true,
            };
        case ACTION_TYPES.USERS_IS_FETCHING:
            return {
                ...state,
                loading: actions.payload,
            };
        case ACTION_TYPES.SET_USERS:
            return {
                ...state,
                users: actions.payload,
            };
        case ACTION_TYPES.SET_PROMOTIONS:
            return {
                ...state,
                promotions: actions.payload,
            };
        case ACTION_TYPES.LOGOUT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: {},
                isLoggedIn: false,
            };
        case ACTION_TYPES.LOGOUT_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: {},
                isLoggedIn: false,
            };
        default:
            return state;
    }
};