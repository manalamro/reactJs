import * as ACTION_TYPES from "../actionsTypes";

export const set_error = (error) => {
    return {
        type: ACTION_TYPES.SET_ERROR,
        payload: error,
    };
};
export const set_success = (success) => {
    return {
        type: ACTION_TYPES.SET_SUCCESS,
        payload: success,
    };
};
export const set_success_message = (message) => {
    return {
        type: ACTION_TYPES.SET_SUCCESS_MESSAGE,
        payload: message,
    };
};
export const set_questions_language = (
    questionsLanguage
) => {
    return {
        type: ACTION_TYPES.SET_QUESTIONS_LANGUAGE,
        payload: questionsLanguage,
    };
};
export const get_stats_success = (stats) => {
    return {
        type: ACTION_TYPES.SET_STATS_SUCCESS,
        payload: stats,
    };
};
export const get_inspection_success = (
    inspection
) => {
    return {
        type: ACTION_TYPES.GET_INSPECTION_SUCCESS,
        payload: inspection,
    };
};
export const get_inspection_details_success = (
    inspectionDetails
) => {
    return {
        type: ACTION_TYPES.GET_INSPECTION_DETAILS_SUCCESS,
        payload: inspectionDetails,
    };
};
export const get_recent_vehicles_success = (
    recentVehicles
) => {
    return {
        type: ACTION_TYPES.SET_RECENT_VEHICLES_SUCCESS,
        payload: recentVehicles,
    };
};
export const set_selected_date_success = (
    date
) => {
    return {
        type: ACTION_TYPES.SET_SELECTED_DATE_SUCCESS,
        payload: date,
    };
};
export const set_dashboard_loading = (
    loading
) => {
    return {
        type: ACTION_TYPES.SET_DASHBOARD_IS_LOADING,
        payload: loading,
    };
};

export const show_load_more = (showLoadMore) => {
    return {
        type: ACTION_TYPES.SET_SHOW_LOAD_MORE,
        payload: showLoadMore,
    };
};

export const setError = (error) => (dispatch) => {
    dispatch(set_error(error));
};
export const setSuccessMessage =
    (systemMessage, customMessage) =>
    (dispatch) => {
        dispatch(set_dashboard_loading(true));
        dispatch(set_success_message(systemMessage || customMessage));
        dispatch(set_dashboard_loading(false));
    };