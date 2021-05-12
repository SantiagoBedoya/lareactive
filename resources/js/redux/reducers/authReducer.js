import { types } from "../types"

const initialState = {
    authUser: null,
    checking: false
}
export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case types.AUTHSetUser:
            return {
                ...state,
                authUser: action.payload
            }
        case types.AUTHSetChecking:
            return {
                ...state,
                checking: action.payload
            }
        default:
            return state;
    }
}