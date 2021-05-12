import { types } from "../types"

const initialState = {
    loading: false
}
export const uiReducer = (state = initialState, action) => {
    switch(action.type){
        case types.UISetLoading:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}