import { commonActions } from "./index";
import * as ACTION_TYPES from "../actionsTypes";
import AuthService from "../../services/AuthService";
import { persistor } from "..";
import { setError, setSuccessMessage } from "./common";

const auth = new AuthService();

export const failure = () => {
    return {
        type: ACTION_TYPES.FAILURE,
    };
};

export const login_success = (payload) => {
    return {
        type: ACTION_TYPES.LOGIN_SUCCESS,
        payload,
    };
};
export const userLogout = () => {
    return {
        type: ACTION_TYPES.USER_LOGOUT,
    };
};

export const login_failure = (error) => {
    return {
        type: ACTION_TYPES.LOGIN_FAILURE,
        payload: error,
    };
};

export const add_profile = (profile) => {
    return {
        type: ACTION_TYPES.ADD_PROFILE,
        payload: profile,
    };
};

export const remove_profile = () => {
    return {
        type: ACTION_TYPES.REMOVE_PROFILE,
    };
};

export const user_input_change = (text) => {
    return {
        type: ACTION_TYPES.USER_INPUT_CHANGE,
        payload: text,
    };
};

export const user_input_submit = (text) => {
    return {
        type: ACTION_TYPES.USER_INPUT_SUBMIT,
        payload: text,
    };
};

export const setAccessToken = (token) => {
    return auth.setAccessToken(token);
};

export const login =
    (email, password) => async(dispatch) => {
        try {
            const {
                data: { token, user },
                message,
            } = await auth.logIn(email, password);

            setAccessToken(token);
            dispatch(login_success(user));
            dispatch(setSuccessMessage(message));
        } catch (error) {
            dispatch(setError(error));
        }
    };
export const signUp =
    (userInfo, setSubmitted) => async(dispatch) => {
        try {
            const {
                data: { token, user },
                message,
            } = await auth.signUp(userInfo);

            // setAccessToken(token);
            // dispatch(login_success(user));

            dispatch(setSuccessMessage(message));
            setSubmitted(true);
        } catch (error) {
            dispatch(setError(error));
        }
    };

export const forgotPassword = (email) => async(dispatch) => {
    try {
        const {
            data: { user },
        } = await auth.forgotPassword(email);
        dispatch(
            commonActions.set_success("Password reset link sent to your email")
        );
        // TODO: To handle it
    } catch (error) {
        dispatch(setError(error));
    }
};
export const confirmCode =
    (email, code) => async(dispatch) => {
        try {
            const {
                data: { user },
            } = await auth.confirmCode(email, code);
            dispatch(commonActions.set_success("Code is valid"));
            // TODO: To handle it
        } catch (error) {
            dispatch(setError(error));
        }
    };
export const resetPassword =
    ({ email, code, password, confirmPassword }) =>
    async(dispatch) => {
        try {
            const {
                data: { user },
            } = await auth.resetPassword({ email, code, password, confirmPassword });
            dispatch(commonActions.set_success("Password reset successfully"));
            // TODO: To handle it
        } catch (error) {
            dispatch(setError(error));
        }
    };
export const logout =
    () =>
    async(dispatch) => {
        auth.removeAccessToken();
        await persistor.purge();
        dispatch(userLogout());
        window.location.reload();
    };

export const getAccessToken = () => {
    return auth.getAccessToken();
};