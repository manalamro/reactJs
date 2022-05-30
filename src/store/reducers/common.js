import * as ACTION_TYPES from "../actionsTypes";

export const initialState = {
    loading: false,
    successMessage: "",
    error: null,
    success: null,
    stats: [],
    showLoadMore: true,
};

export const commonReducer = (
    state = initialState, { type, payload } = { type: "", payload: "" }
) => {
    switch (type) {
        case ACTION_TYPES.SET_ERROR:
            return {
                ...state,
                error: payload,
            };
        case ACTION_TYPES.SET_SUCCESS:
            return {
                ...state,
                success: payload,
            };
        case ACTION_TYPES.SET_SUCCESS_MESSAGE:
            return {
                ...state,
                successMessage: payload,
            };
        case ACTION_TYPES.SET_QUESTIONS_LANGUAGE:
            return {
                ...state,
                questionsLanguage: payload,
            };
        case ACTION_TYPES.SET_STATS_SUCCESS:
            return {
                ...state,
                stats: payload,
            };
        case ACTION_TYPES.SET_SELECTED_DATE_SUCCESS:
            return {
                ...state,
                selectedDate: payload,
            };
        case ACTION_TYPES.SET_DASHBOARD_IS_LOADING:
            return {
                ...state,
                loading: payload,
            };
        case ACTION_TYPES.SET_RECENT_VEHICLES_SUCCESS:
            return {
                ...state,
                vehicles: payload,
            };
        case ACTION_TYPES.GET_INSPECTION_SUCCESS:
            return {
                ...state,
                inspection: payload,
            };
        case ACTION_TYPES.GET_INSPECTION_DETAILS_SUCCESS:
            return {
                ...state,
                inspectionDetails: payload,
            };
        case ACTION_TYPES.APP_IS_LOADING:
            return {
                ...state,
                loading: payload,
            };
        case ACTION_TYPES.SET_SHOW_LOAD_MORE:
            return {
                ...state,
                showLoadMore: payload,
            };
        default:
            return state;
    }
};