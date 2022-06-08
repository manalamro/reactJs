import * as ACTION_TYPES from "../actionsTypes";
import UsersService from "../../services/UsersService";
import { set_error } from "./common";

const usersService = new UsersService();

export const isFetching = (loading) => ({
    type: ACTION_TYPES.USERS_IS_FETCHING,
    payload: loading,
});

export const updateUserInfo = (user) => ({
    type: ACTION_TYPES.UPDATE_USER_INFO,
    payload: user,
});
export const setSelectedUser = (user) => ({
    type: ACTION_TYPES.SET_SELECTED_USER,
    payload: user,
});
export const setUsers = (users) => ({
    type: ACTION_TYPES.SET_USERS,
    payload: users,
});
export const setPromotions = (promotions) => ({
    type: ACTION_TYPES.SET_PROMOTIONS,
    payload: promotions,
});

export const getUserById =
    (id) =>
    async(dispatch) => {
        try {
            dispatch(isFetching(true));
            const response = await usersService.getUserById(id);

            dispatch(setSelectedUser(response));
        } catch (error) {
            set_error(error);
        } finally {
            dispatch(isFetching(false));
        }
    };
export const deleteUser =
    (id) =>
    async(dispatch) => {
        try {
            dispatch(isFetching(true));
            await usersService.deleteUser(id);
            const response = await usersService.getUsers();
            dispatch(setUsers(response));
        } catch (error) {
            set_error(error);
        } finally {
            dispatch(isFetching(false));
        }
    };
export const deletePromotion =
    (id) =>
    async(dispatch) => {
        try {
            dispatch(isFetching(true));
            await usersService.deletePromotion(id);
            const response = await usersService.getPromotions();
            dispatch(setPromotions(response));
        } catch (error) {
            set_error(error);
        } finally {
            dispatch(isFetching(false));
        }
    };
export const getUsers =
    () =>
    async(dispatch) => {
        try {
            dispatch(isFetching(true));
            const response = await usersService.getUsers();

            dispatch(setUsers(response));
        } catch (error) {
            set_error(error);
        } finally {
            dispatch(isFetching(false));
        }
    };
export const getPromotions =
    () =>
    async(dispatch) => {
        try {
            dispatch(isFetching(true));
            const response = await usersService.getPromotions();

            dispatch(setPromotions(response));
        } catch (error) {
            set_error(error);
        } finally {
            dispatch(isFetching(false));
        }
    };

export const updateUser =
    (user) =>
    async(dispatch) => {
        try {
            dispatch(isFetching(true));

            await usersService.updateUserInfo(user);
            const response = await usersService.getUsers();
            dispatch(setUsers(response));
        } catch (error) {
            set_error(error);
        } finally {
            dispatch(isFetching(false));
        }
    };
export const updatePromotion =
    (promotion) =>
    async(dispatch) => {
        try {
            dispatch(isFetching(true));

            await usersService.updatePromotion(promotion);
            const response = await usersService.getPromotions();
            dispatch(setPromotions(response));
        } catch (error) {
            set_error(error);
        } finally {
            dispatch(isFetching(false));
        }
    };
export const createUser =
    (user) =>
    async(dispatch) => {
        try {
            dispatch(isFetching(true));

            await usersService.createUser(user);
            const response = await usersService.getUsers();

            dispatch(setUsers(response));
        } catch (error) {
            set_error(error);
        } finally {
            dispatch(isFetching(false));
        }
    };
export const createPromotion =
    (promotion) =>
    async(dispatch) => {
        try {
            dispatch(isFetching(true));

            await usersService.createPromotion(promotion);
            const response = await usersService.getPromotions();

            dispatch(setPromotions(response));
        } catch (error) {
            set_error(error);
        } finally {
            dispatch(isFetching(false));
        }
    };