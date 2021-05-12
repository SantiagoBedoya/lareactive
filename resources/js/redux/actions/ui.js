import { types } from "../types"

export const setLoading = (isLoading) => ({
    type: types.UISetLoading,
    payload: isLoading
});