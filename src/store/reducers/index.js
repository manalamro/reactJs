import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { commonReducer } from "./common";
import { usersReducer } from "./users";

export const rootReducer = combineReducers({
    auth: authReducer,
    common: commonReducer,
    users: usersReducer,
});

export default (state, action) =>
rootReducer(
    action.type === "USER_LOGOUT" ? undefined : state,
    action
);