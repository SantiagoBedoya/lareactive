import { fetcher } from "../../utils/helpers/fetcher"
import { types } from "../types";

export const startChecking = () => {
    return async (dispatch) => {
        dispatch(setChecking(true));
        const resp = await fetcher.get('/me');
        dispatch(setUser(resp.data));
        dispatch(setChecking(false));
    }
}

export const startLogout = () => {
    return async (dispatch) =>{
        const resp = await fetcher.post('/logout');
        dispatch(setUser(null));
        window.location.replace('/');
    }
}

export const setChecking = (checking) => ({
    type: types.AUTHSetChecking,
    payload: checking
});

export const setUser = (user) => ({
    type: types.AUTHSetUser,
    payload: user
});