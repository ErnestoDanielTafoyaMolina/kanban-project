import { types } from "../types/types";

const initialState = {
    email: null,
    username: null,
    token: null,
}

 export const authReducer=(state = initialState, action)=>{
    switch(action.type){
        case types.login:
            return {
                ...state,
                email:action.payload.email,
                username:action.payload.username,
                token:action.payload.token,
                error:null
            };
        case types.logout:
            return {
                email: null,
                username: null,
                token: null,
                error:null
            };
        case (types.loginFailure):
            return{
                email: null,
                username: null,
                token: null,
                error:action.payload.error
            }
        default:
            return state;
    }
 }