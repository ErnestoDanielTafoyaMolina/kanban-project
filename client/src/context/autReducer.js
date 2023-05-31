import { types } from "../types/types";

const initialState = {
    logged:false
}

 export const autReducer=(state = initialState, action)=>{
    switch(action.type){
        case types.login:
            return {
                logged: true
                name:action.payload
            }
            
        case types.logout:
            return state

        default:
            break;
    }
 }